import { deleteFile, getFile, putFile } from "@/lib/idb";
import {
  emptyLibrary,
  loadLibrary,
  parseFileName,
  saveLibrary,
  shuffleArray,
  type LibraryState,
  type Playlist,
  type RepeatMode,
  type Song,
} from "@/lib/library";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type PlayerContextValue = {
  ready: boolean;
  songs: Song[];
  playlists: Playlist[];
  favorites: string[];
  recent: Song[];
  queue: string[];
  currentSong: Song | null;
  mediaUrl: string | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  shuffle: boolean;
  repeat: RepeatMode;
  importFiles: (files: FileList | File[]) => Promise<number>;
  removeSong: (id: string) => void;
  playSong: (id: string, list?: string[]) => void;
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
  seek: (time: number) => void;
  setVolume: (v: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  createPlaylist: (name: string, description: string) => void;
  deletePlaylist: (id: string) => void;
  renamePlaylist: (id: string, name: string, description: string) => void;
  addToPlaylist: (playlistId: string, songId: string) => void;
  removeFromPlaylist: (playlistId: string, songId: string) => void;
  removeFromQueue: (index: number) => void;
  getSong: (id: string) => Song | undefined;
  downloadSong: (id: string) => Promise<void>;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [lib, setLib] = useState<LibraryState>(emptyLibrary);
  const [ready, setReady] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);
  const libRef = useRef(lib);
  libRef.current = lib;

  useEffect(() => {
    setLib(loadLibrary());
    setReady(true);
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;
    return () => {
      audio.pause();
      if (urlRef.current?.startsWith("blob:")) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  useEffect(() => {
    if (ready) saveLibrary(lib);
  }, [lib, ready]);

  const update = useCallback((patch: Partial<LibraryState>) => {
    setLib((prev) => ({ ...prev, ...patch }));
  }, []);

  const getSong = useCallback((id: string) => libRef.current.songs.find((s) => s.id === id), []);

  const loadAndPlay = useCallback(async (id: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    const song = libRef.current.songs.find((item) => item.id === id);
    const blob = song?.source ? null : await getFile(id);
    if (!song?.source && !blob) return;
    if (urlRef.current?.startsWith("blob:")) URL.revokeObjectURL(urlRef.current);
    const url = song?.source ?? URL.createObjectURL(blob as Blob);
    urlRef.current = url;
    setMediaUrl(url);
    audio.src = url;
    audio.volume = libRef.current.volume;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
    setLib((prev) => ({ ...prev, recent: [id, ...prev.recent.filter((r) => r !== id)].slice(0, 40) }));
  }, []);

  const advance = useCallback(
    (dir: 1 | -1) => {
      const q = queue.length ? queue : libRef.current.songs.map((s) => s.id);
      if (!q.length || !currentId) return;
      const idx = q.indexOf(currentId);
      let nextIdx = idx + dir;
      if (nextIdx >= q.length) {
        if (libRef.current.repeat === "off") {
          setIsPlaying(false);
          audioRef.current?.pause();
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
    [queue, currentId, loadAndPlay],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => {
      if (libRef.current.repeat === "one") {
        audio.currentTime = 0;
        void audio.play();
        return;
      }
      advance(1);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [advance]);

  const readDuration = (file: File) =>
    new Promise<number>((resolve) => {
      const url = URL.createObjectURL(file);
      const probe = new Audio();
      probe.preload = "metadata";
      const done = (value: number) => {
        URL.revokeObjectURL(url);
        resolve(value);
      };
      probe.onloadedmetadata = () => done(probe.duration || 0);
      probe.onerror = () => done(0);
      probe.src = url;
    });

  const importFiles = useCallback(async (files: FileList | File[]) => {
    const list = Array.from(files).filter(
      (f) => f.type.startsWith("audio/") || f.type.startsWith("video/") || /\.(mp3|wav|ogg|flac|m4a|aac|mp4|webm|mov|mkv)$/i.test(f.name),
    );
    const added: Song[] = [];
    for (const file of list) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      await putFile(id, file);
      const { title, artist } = parseFileName(file.name);
      added.push({
        id,
        title,
        artist,
        album: "Imported",
        duration: await readDuration(file),
        addedAt: Date.now(),
        mediaType: file.type.startsWith("video/") || /\.(mp4|webm|mov|mkv)$/i.test(file.name) ? "video" : "audio",
      });
    }
    if (added.length) setLib((prev) => ({ ...prev, songs: [...prev.songs, ...added] }));
    return added.length;
  }, []);

  const downloadSong = useCallback(async (id: string) => {
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
    (id: string) => {
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
        audioRef.current?.pause();
        setCurrentId(null);
        setIsPlaying(false);
      }
    },
    [currentId],
  );

  const playSong = useCallback(
    (id: string, list?: string[]) => {
      const base = list ?? libRef.current.songs.map((s) => s.id);
      const ordered = libRef.current.shuffle ? [id, ...shuffleArray(base.filter((s) => s !== id))] : base;
      setQueue(ordered);
      setCurrentId(id);
      void loadAndPlay(id);
    },
    [loadAndPlay],
  );

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!currentId) {
      const first = libRef.current.songs[0];
      if (first) playSong(first.id);
      return;
    }
    if (audio.paused) {
      void audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentId, playSong]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback(
    (v: number) => {
      if (audioRef.current) audioRef.current.volume = v;
      update({ volume: v });
    },
    [update],
  );

  const value = useMemo<PlayerContextValue>(
    () => ({
      ready,
      songs: lib.songs,
      playlists: lib.playlists,
      favorites: lib.favorites,
      recent: lib.recent
        .map((id) => lib.songs.find((s) => s.id === id))
        .filter((s): s is Song => Boolean(s)),
      queue,
      currentSong: lib.songs.find((s) => s.id === currentId) ?? null,
      mediaUrl,
      isPlaying,
      currentTime,
      duration,
      volume: lib.volume,
      shuffle: lib.shuffle,
      repeat: lib.repeat,
      importFiles,
      removeSong,
      playSong,
      togglePlay,
      next: () => advance(1),
      previous: () => {
        if (audioRef.current && audioRef.current.currentTime > 3) {
          seek(0);
          return;
        }
        advance(-1);
      },
      seek,
      setVolume,
      toggleShuffle: () => update({ shuffle: !lib.shuffle }),
      cycleRepeat: () =>
        update({ repeat: lib.repeat === "off" ? "all" : lib.repeat === "all" ? "one" : "off" }),
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
    ],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}
