import { deleteFile, getFile, putFile } from "@/lib/idb";
import { emptyLibrary, loadLibrary, parseFileName, saveLibrary, shuffleArray,  } from "@/lib/library";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,  } from "react";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [lib, setLib] = useState(emptyLibrary);
  const [ready, setReady] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const urlRef = useRef(null);
  const libRef = useRef(lib);
  libRef.current = lib;

  /** The element currently responsible for audio output. */
  const activeEl = useCallback(() => {
    const song = libRef.current.songs.find((s) => s.id === currentIdRef.current);
    const useVideo = showVideoRef.current && song?.mediaType === "video" && videoRef.current;
    return useVideo ? videoRef.current : audioRef.current;
  }, []);

  // Keep currentId + showVideo readable inside stable callbacks.
  const currentIdRef = useRef(null);
  currentIdRef.current = currentId;
  const showVideoRef = useRef(false);
  showVideoRef.current = showVideo;

  useEffect(() => {
    setLib(loadLibrary());
    setReady(true);
    const audio = new Audio();
    audio.preload = "metadata";
    audio.load();
    audioRef.current = audio;
    return () => {
      audio.pause();
      if (urlRef.current?.startsWith("blob:")) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  useEffect(() => {
    if (ready) saveLibrary(lib);
  }, [lib, ready]);

  const update = useCallback((patch) => {
    setLib((prev) => ({ ...prev, ...patch }));
  }, []);

  const getSong = useCallback((id) => libRef.current.songs.find((s) => s.id === id), []);

  /** Push a URL into both audio and video elements so either can play instantly. */
  const setSourceOnElements = useCallback((url) => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (audio) {
      audio.src = url;
      audio.load();
      audio.volume = libRef.current.volume;
    }
    if (video) {
      video.src = url;
      video.load();
      video.volume = libRef.current.volume;
    }
  }, []);

  const loadAndPlay = useCallback(
  async (id) => {
    const song = libRef.current.songs.find((item) => item.id === id);
    if (song?.mediaType !== "video") setShowVideo(false);

    const blob = song?.source ? null : await getFile(id);
    if (!song?.source && !blob) return;

    if (urlRef.current?.startsWith("blob:")) URL.revokeObjectURL(urlRef.current);
    const url = song?.source ?? URL.createObjectURL(blob);
    urlRef.current = url;
    setMediaUrl(url);
    setSourceOnElements(url);

    // Pick the element that should own playback for this track.
    const useVideo = song?.mediaType === "video" && showVideoRef.current && videoRef.current;
    const el = useVideo ? videoRef.current : audioRef.current;
    const other = useVideo ? audioRef.current : videoRef.current;
    if (!el) return;

    // Make sure the other element is silent so nothing double-plays.
    if (other) {
      other.pause();
    }

    // Wait until the element actually has enough data to start playing.
    // Without this, `play()` right after setting `src` rejects and the track
    // looks like it "paused" until the user clicks play again.
    if (el.readyState < 2) {
      await new Promise((resolve) => {
        const done = () => {
          el.removeEventListener("loadeddata", done);
          el.removeEventListener("canplay", done);
          el.removeEventListener("error", done);
          resolve();
        };
        el.addEventListener("loadeddata", done);
        el.addEventListener("canplay", done);
        el.addEventListener("error", done);
        // Safety timeout in case the events never fire.
        setTimeout(done, 4000);
      });
    }

    el.volume = libRef.current.volume;
    el.currentTime = 0;

    try {
      await el.play();
      setIsPlaying(true);
    } catch {
      // Autoplay might still be blocked if the tab lost focus; leave paused.
      setIsPlaying(false);
    }

    setLib((prev) => ({
      ...prev,
      recent: [id, ...prev.recent.filter((r) => r !== id)].slice(0, 40),
    }));
  },
  [setSourceOnElements],
);

  const registerVideoElement = useCallback((el) => {
    videoRef.current = el;
    if (!el) return;
    // If the current song is a video and we're in video mode, move playback to it.
    const song = libRef.current.songs.find((s) => s.id === currentIdRef.current);
    if (song?.mediaType === "video" && showVideoRef.current && urlRef.current) {
      const wasPlaying = isPlayingRef.current;
      el.src = urlRef.current;
      el.load();
      el.volume = libRef.current.volume;
      if (wasPlaying) void el.play().catch(() => {});
      // Silence the audio element so only the video plays.
      audioRef.current?.pause();
    }
  }, []);

  const isPlayingRef = useRef(false);
  isPlayingRef.current = isPlaying;

  // When video is toggled on/off, switch the active element without losing position.
  useEffect(() => {
    const song = libRef.current.songs.find((s) => s.id === currentId);
    if (!song || song.mediaType !== "video") return;
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio || !urlRef.current) return;

    if (showVideo) {
      const t = audio.currentTime;
      video.currentTime = t;
      video.volume = libRef.current.volume;
      if (isPlaying) void video.play().catch(() => {});
      audio.pause();
    } else {
      const t = video.currentTime;
      audio.currentTime = t;
      audio.volume = libRef.current.volume;
      if (isPlaying) void audio.play().catch(() => {});
      video.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showVideo]);

  const advance = useCallback(
    (dir) => {
      const q = queue.length ? queue : libRef.current.songs.map((s) => s.id);
      if (!q.length || !currentId) return;
      const idx = q.indexOf(currentId);
      let nextIdx = idx + dir;
      if (nextIdx >= q.length) {
        if (libRef.current.repeat === "off") {
          setIsPlaying(false);
          activeEl()?.pause();
          return;
        }
        nextIdx = 0;
      }
      if (nextIdx < 0) nextIdx = q.length - 1;
      const nextId = q[nextIdx];
      if (!nextId) return;
      setCurrentId(nextId);
      void loadAndPlay(nextId);
    },
    [queue, currentId, loadAndPlay, activeEl],
  );

  // Wire listeners to BOTH elements. Whichever one is playing drives state.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = (e) => {
      const el = e.currentTarget;
      if (el === activeEl()) setCurrentTime(el.currentTime);
    };
    const onMeta = (e) => {
      const el = e.currentTarget;
      if (el === activeEl()) setDuration(el.duration || 0);
    };
    const onEnd = (e) => {
      const el = e.currentTarget;
      if (el !== activeEl()) return;
      if (libRef.current.repeat === "one") {
        el.currentTime = 0;
        void el.play();
        return;
      }
      advance(1);
    };
    const onPlay = (e) => {
      if (e.currentTarget === activeEl()) setIsPlaying(true);
    };
    const onPause = (e) => {
      if (e.currentTarget === activeEl()) setIsPlaying(false);
    };

    const targets = [audio];
    if (videoRef.current) targets.push(videoRef.current);

    targets.forEach((el) => {
      el.addEventListener("timeupdate", onTime);
      el.addEventListener("loadedmetadata", onMeta);
      el.addEventListener("ended", onEnd);
      el.addEventListener("play", onPlay);
      el.addEventListener("pause", onPause);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener("timeupdate", onTime);
        el.removeEventListener("loadedmetadata", onMeta);
        el.removeEventListener("ended", onEnd);
        el.removeEventListener("play", onPlay);
        el.removeEventListener("pause", onPause);
      });
    };
    // Re-attach when the video element is registered (showVideo toggles it into existence).
  }, [advance, activeEl, showVideo]);

  const readDuration = (file) =>
    new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      const probe = new Audio();
      probe.preload = "metadata";
      const done = (value) => {
        URL.revokeObjectURL(url);
        resolve(value);
      };
      probe.onloadedmetadata = () => done(probe.duration || 0);
      probe.onerror = () => done(0);
      probe.src = url;
      probe.load();
    });

  const importFiles = useCallback(async (files) => {
    const list = Array.from(files).filter(
      (f) =>
        f.type.startsWith("audio/") ||
        f.type.startsWith("video/") ||
        /\.(mp3|wav|ogg|flac|m4a|aac|mp4|webm|mov|mkv)$/i.test(f.name),
    );
    const added = [];
    for (const file of list) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      await putFile(id, file);
      const { title, artist } = parseFileName(file.name);
      const album = artist !== "Unknown artist" ? artist : "Imported";
      const coverMap = { "Chris Brown": "chrisbrown", "Bruno Mars": "brunomars" };
      const coverKey = coverMap[artist] || (artist !== "Unknown artist" ? artist.toLowerCase().replace(/\s+/g, "") : "");
      const cover = coverKey ? `/covers/${coverKey}.jpg` : null;
      added.push({
        id,
        title,
        artist,
        album,
        duration: await readDuration(file),
        addedAt: Date.now(),
        mediaType:
          file.type.startsWith("video/") || /\.(mp4|webm|mov|mkv)$/i.test(file.name)
            ? "video"
            : "audio",
        source: null,
        cover,
      });
    }
    if (added.length) setLib((prev) => ({ ...prev, songs: [...prev.songs, ...added] }));
    return added.length;
  }, []);

  const downloadSong = useCallback(async (id) => {
    const song = libRef.current.songs.find((item) => item.id === id);
    if (!song) return;
    const blob = song.source ? null : await getFile(id);
    const href = song.source ?? (blob ? URL.createObjectURL(blob) : null);
    if (!href) return;
    const link = document.createElement("a");
    link.href = href;
    link.download = `${song.artist} - ${song.title}.${song.mediaType === "video" ? "mp4" : "mp3"}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (blob) URL.revokeObjectURL(href);
  }, []);

  const removeSong = useCallback(
    (id) => {
      void deleteFile(id);
      setLib((prev) => ({
        ...prev,
        songs: prev.songs.filter((s) => s.id !== id),
        favorites: prev.favorites.filter((f) => f !== id),
        recent: prev.recent.filter((r) => r !== id),
        playlists: prev.playlists.map((p) => ({ ...p, songs: p.songs.filter((s) => s !== id) })),
      }));
      setQueue((q) => q.filter((q1) => q1 !== id));
      if (currentId === id) {
        activeEl()?.pause();
        setCurrentId(null);
        setIsPlaying(false);
      }
    },
    [currentId, activeEl],
  );

  const playSong = useCallback(
    (id, list) => {
      const base = list ?? libRef.current.songs.map((s) => s.id);
      const ordered = libRef.current.shuffle
        ? [id, ...shuffleArray(base.filter((s) => s !== id))]
        : base;
      setQueue(ordered);
      setCurrentId(id);
      void loadAndPlay(id);
    },
    [loadAndPlay],
  );

  const togglePlay = useCallback(() => {
    if (!currentId) {
      const first = libRef.current.songs[0];
      if (first) playSong(first.id);
      return;
    }
    const el = activeEl();
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }, [currentId, playSong, activeEl]);

  const seek = useCallback(
    (time) => {
      const el = activeEl();
      if (!el) return;
      el.currentTime = time;
      setCurrentTime(time);
    },
    [activeEl],
  );

  const setVolume = useCallback(
    (v) => {
      const el = activeEl();
      if (el) el.volume = v;
      // Keep both elements at the same level so switching stays seamless.
      if (audioRef.current) audioRef.current.volume = v;
      if (videoRef.current) videoRef.current.volume = v;
      update({ volume: v });
    },
    [update, activeEl],
  );

  const value = useMemo(() => ({
      ready,
      songs: lib.songs,
      playlists: lib.playlists,
      favorites: lib.favorites,
      recent: lib.recent
        .map((id) => lib.songs.find((s) => s.id === id))
        .filter((s) => Boolean(s)),
      queue,
      currentSong: lib.songs.find((s) => s.id === currentId) ?? null,
      mediaUrl,
      isPlaying,
      currentTime,
      duration,
      volume: lib.volume,
      shuffle: lib.shuffle,
      repeat: lib.repeat,
      showVideo,
      toggleVideo: () => setShowVideo((v) => !v),
      registerVideoElement,
      importFiles,
      removeSong,
      playSong,
      togglePlay,
      next: () => advance(1),
      previous: () => {
        const el = activeEl();
        if (el && el.currentTime > 3) {
          seek(0);
          return;
        }
        advance(-1);
      },
      seek,
      setVolume,
      toggleShuffle: () => update({ shuffle: !lib.shuffle }),
      cycleRepeat: () =>
        update({
          repeat: lib.repeat === "off" ? "all" : lib.repeat === "all" ? "one" : "off",
        }),
      toggleFavorite: (id) =>
        update({
          favorites: lib.favorites.includes(id)
            ? lib.favorites.filter((f) => f !== id)
            : [...lib.favorites, id],
        }),
      isFavorite: (id) => lib.favorites.includes(id),
      createPlaylist: (name, description) =>
        update({
          playlists: [
            ...lib.playlists,
            {
              id: `pl-${Date.now()}`,
              name,
              description,
              songs: [],
              createdAt: Date.now(),
            },
          ],
        }),
      deletePlaylist: (id) => update({ playlists: lib.playlists.filter((p) => p.id !== id) }),
      renamePlaylist: (id, name, description) =>
        update({
          playlists: lib.playlists.map((p) => (p.id === id ? { ...p, name, description } : p)),
        }),
      addToPlaylist: (playlistId, songId) =>
        update({
          playlists: lib.playlists.map((p) =>
            p.id === playlistId && !p.songs.includes(songId)
              ? { ...p, songs: [...p.songs, songId] }
              : p,
          ),
        }),
      removeFromPlaylist: (playlistId, songId) =>
        update({
          playlists: lib.playlists.map((p) =>
            p.id === playlistId ? { ...p, songs: p.songs.filter((s) => s !== songId) } : p,
          ),
        }),
      removeFromQueue: (index) => setQueue((q) => q.filter((_, i) => i !== index)),
      getSong,
      downloadSong,
    }),
    [
      ready,
      mediaUrl,
      lib,
      queue,
      currentId,
      isPlaying,
      currentTime,
      duration,
      showVideo,
      importFiles,
      removeSong,
      playSong,
      togglePlay,
      advance,
      seek,
      setVolume,
      update,
      getSong,
      downloadSong,
      registerVideoElement,
      activeEl,
    ],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}
