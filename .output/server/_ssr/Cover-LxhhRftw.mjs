import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { h as Music2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Cover-LxhhRftw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DB_NAME = "harmony-music";
var STORE = "files";
function openDB() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
function tx(mode, fn) {
	return openDB().then((db) => new Promise((resolve, reject) => {
		const req = fn(db.transaction(STORE, mode).objectStore(STORE));
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	}));
}
var putFile = (id, blob) => tx("readwrite", (s) => s.put(blob, id));
var getFile = (id) => tx("readonly", (s) => s.get(id));
var deleteFile = (id) => tx("readwrite", (s) => s.delete(id));
var defaultSongs = [
	"ADÉLA - Ain't In LA.mp4",
	"Astrid S - Hurts So Good.mp4",
	"bye X Kiss It Better - Rihanna & altare.mp4",
	"Doja Cat - Agora Hills.mp4",
	"Doja Cat x The Weeknd x Lana Del Rey - Streets _ One Of The Girls .mp4",
	"Heidi Montag - I'll Do It.mp4",
	"Into You X bye (altare remix) - Ariana Grande.mp4",
	"JENNIE - Less than a Lover (Official Video.mp4",
	"JENNIE - Seoul City (Official Video.mp4",
	"JENNIE, Dua Lipa - Handlebars (Official Lyric Video.mp4",
	"Kali Uchis - Moonlight (Official Lyric Video.mp4",
	"Katy Perry - Harleys In Hawaii (Lyrics) _You and I, Ridin' Harleys in Hawaii.mp4",
	"Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video.mp4",
	"One Of The Girls X Good For You - The Weeknd, JENNIE, Lily-Rose Depp & Selena Gómez.mp4",
	"Reed Wonder, Aurora Olivas - The Machine.mp4",
	"Rihanna - Kiss It Better (Lyrics).mp4",
	"stereo love x on the floor _ slowed n reverb.mp4",
	"Summer Walker & Ciara - Ex Party.mp4",
	"The Weeknd - Starboy (feat. Daft Punk).mp4",
	"The Weeknd, Playboi Carti - Timeless (Official Lyric Video.mp4",
	"Tinashe - 2 On (Lyrics) ft. SchoolBoy.mp4",
	"under the influence x I was never there.mp4",
	"YAD (Яд) ENGLISH VERSION.mp4"
].map((file, index) => {
	const parsed = parseFileName(file);
	return {
		id: `luxury-vibes-${index + 1}`,
		title: parsed.title,
		artist: parsed.artist,
		album: "Luxury Vibes",
		duration: 0,
		addedAt: 0,
		mediaType: "video",
		source: `/music/playlist/LuxuryVibes/${encodeURIComponent(file).replace(/%2F/g, "/")}`
	};
});
var emptyLibrary = {
	songs: defaultSongs,
	playlists: [{
		id: "luxury-vibes",
		name: "Luxury Vibes",
		description: "Your imported video music collection",
		songs: defaultSongs.map((song) => song.id),
		createdAt: 0,
		cover: "/covers/luxuryvibes.jpg"
	}],
	favorites: [],
	recent: [],
	volume: .8,
	shuffle: false,
	repeat: "off"
};
var STORAGE_KEY = "harmony-library";
function loadLibrary() {
	if (typeof window === "undefined") return emptyLibrary;
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (!stored) return emptyLibrary;
		const parsed = JSON.parse(stored);
		return {
			...emptyLibrary,
			...parsed,
			songs: parsed.songs?.length ? parsed.songs : emptyLibrary.songs,
			playlists: parsed.playlists?.length ? parsed.playlists : emptyLibrary.playlists
		};
	} catch {
		return emptyLibrary;
	}
}
function saveLibrary(library) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
	} catch {}
}
function parseFileName(name) {
	const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ").trim();
	const parts = base.split(/\s+[-\u2013]\s+/);
	if (parts.length >= 2) return {
		artist: parts[0].trim(),
		title: parts.slice(1).join(" - ").trim()
	};
	return {
		artist: "Unknown artist",
		title: base
	};
}
function shuffleArray(items) {
	const copy = [...items];
	for (let index = copy.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
	}
	return copy;
}
function formatTime(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
	return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}
function coverGradient(seed) {
	let hash = 0;
	for (const character of seed) hash = hash * 31 + character.charCodeAt(0) | 0;
	const hue = Math.abs(hash) % 360;
	return `linear-gradient(135deg, hsl(${hue} 68% 52%), hsl(${(hue + 48) % 360} 58% 24%))`;
}
var PlayerContext = (0, import_react.createContext)(null);
function PlayerProvider({ children }) {
	const [lib, setLib] = (0, import_react.useState)(emptyLibrary);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [currentId, setCurrentId] = (0, import_react.useState)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [mediaUrl, setMediaUrl] = (0, import_react.useState)(null);
	const audioRef = (0, import_react.useRef)(null);
	const urlRef = (0, import_react.useRef)(null);
	const libRef = (0, import_react.useRef)(lib);
	libRef.current = lib;
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (ready) saveLibrary(lib);
	}, [lib, ready]);
	const update = (0, import_react.useCallback)((patch) => {
		setLib((prev) => ({
			...prev,
			...patch
		}));
	}, []);
	const getSong = (0, import_react.useCallback)((id) => libRef.current.songs.find((s) => s.id === id), []);
	const loadAndPlay = (0, import_react.useCallback)(async (id) => {
		const audio = audioRef.current;
		if (!audio) return;
		const song = libRef.current.songs.find((item) => item.id === id);
		const blob = song?.source ? null : await getFile(id);
		if (!song?.source && !blob) return;
		if (urlRef.current?.startsWith("blob:")) URL.revokeObjectURL(urlRef.current);
		const url = song?.source ?? URL.createObjectURL(blob);
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
		setLib((prev) => ({
			...prev,
			recent: [id, ...prev.recent.filter((r) => r !== id)].slice(0, 40)
		}));
	}, []);
	const advance = (0, import_react.useCallback)((dir) => {
		const q = queue.length ? queue : libRef.current.songs.map((s) => s.id);
		if (!q.length || !currentId) return;
		let nextIdx = q.indexOf(currentId) + dir;
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
		loadAndPlay(nextId);
	}, [
		queue,
		currentId,
		loadAndPlay
	]);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		const onTime = () => setCurrentTime(audio.currentTime);
		const onMeta = () => setDuration(audio.duration || 0);
		const onEnd = () => {
			if (libRef.current.repeat === "one") {
				audio.currentTime = 0;
				audio.play();
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
	const readDuration = (file) => new Promise((resolve) => {
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
	});
	const importFiles = (0, import_react.useCallback)(async (files) => {
		const list = Array.from(files).filter((f) => f.type.startsWith("audio/") || f.type.startsWith("video/") || /\.(mp3|wav|ogg|flac|m4a|aac|mp4|webm|mov|mkv)$/i.test(f.name));
		const added = [];
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
				mediaType: file.type.startsWith("video/") || /\.(mp4|webm|mov|mkv)$/i.test(file.name) ? "video" : "audio"
			});
		}
		if (added.length) setLib((prev) => ({
			...prev,
			songs: [...prev.songs, ...added]
		}));
		return added.length;
	}, []);
	const downloadSong = (0, import_react.useCallback)(async (id) => {
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
	const removeSong = (0, import_react.useCallback)((id) => {
		deleteFile(id);
		setLib((prev) => ({
			...prev,
			songs: prev.songs.filter((s) => s.id !== id),
			favorites: prev.favorites.filter((f) => f !== id),
			recent: prev.recent.filter((r) => r !== id),
			playlists: prev.playlists.map((p) => ({
				...p,
				songs: p.songs.filter((s) => s !== id)
			}))
		}));
		setQueue((q) => q.filter((q1) => q1 !== id));
		if (currentId === id) {
			audioRef.current?.pause();
			setCurrentId(null);
			setIsPlaying(false);
		}
	}, [currentId]);
	const playSong = (0, import_react.useCallback)((id, list) => {
		const base = list ?? libRef.current.songs.map((s) => s.id);
		const ordered = libRef.current.shuffle ? [id, ...shuffleArray(base.filter((s) => s !== id))] : base;
		setQueue(ordered);
		setCurrentId(id);
		loadAndPlay(id);
	}, [loadAndPlay]);
	const togglePlay = (0, import_react.useCallback)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		if (!currentId) {
			const first = libRef.current.songs[0];
			if (first) playSong(first.id);
			return;
		}
		if (audio.paused) {
			audio.play();
			setIsPlaying(true);
		} else {
			audio.pause();
			setIsPlaying(false);
		}
	}, [currentId, playSong]);
	const seek = (0, import_react.useCallback)((time) => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.currentTime = time;
		setCurrentTime(time);
	}, []);
	const setVolume = (0, import_react.useCallback)((v) => {
		if (audioRef.current) audioRef.current.volume = v;
		update({ volume: v });
	}, [update]);
	const value = (0, import_react.useMemo)(() => ({
		ready,
		songs: lib.songs,
		playlists: lib.playlists,
		favorites: lib.favorites,
		recent: lib.recent.map((id) => lib.songs.find((s) => s.id === id)).filter((s) => Boolean(s)),
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
		cycleRepeat: () => update({ repeat: lib.repeat === "off" ? "all" : lib.repeat === "all" ? "one" : "off" }),
		toggleFavorite: (id) => update({ favorites: lib.favorites.includes(id) ? lib.favorites.filter((f) => f !== id) : [...lib.favorites, id] }),
		isFavorite: (id) => lib.favorites.includes(id),
		createPlaylist: (name, description) => update({ playlists: [...lib.playlists, {
			id: `pl-${Date.now()}`,
			name,
			description,
			songs: [],
			createdAt: Date.now()
		}] }),
		deletePlaylist: (id) => update({ playlists: lib.playlists.filter((p) => p.id !== id) }),
		renamePlaylist: (id, name, description) => update({ playlists: lib.playlists.map((p) => p.id === id ? {
			...p,
			name,
			description
		} : p) }),
		addToPlaylist: (playlistId, songId) => update({ playlists: lib.playlists.map((p) => p.id === playlistId && !p.songs.includes(songId) ? {
			...p,
			songs: [...p.songs, songId]
		} : p) }),
		removeFromPlaylist: (playlistId, songId) => update({ playlists: lib.playlists.map((p) => p.id === playlistId ? {
			...p,
			songs: p.songs.filter((s) => s !== songId)
		} : p) }),
		removeFromQueue: (index) => setQueue((q) => q.filter((_, i) => i !== index)),
		getSong,
		downloadSong
	}), [
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
		downloadSong
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerContext.Provider, {
		value,
		children
	});
}
function usePlayer() {
	const ctx = (0, import_react.useContext)(PlayerContext);
	if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Cover({ seed, className, iconClassName, imageUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex shrink-0 items-center justify-center overflow-hidden rounded-md", className),
		style: { backgroundImage: coverGradient(seed) },
		children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: imageUrl,
			alt: "",
			className: "h-full w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
			className: cn("h-1/3 w-1/3 opacity-70", iconClassName),
			strokeWidth: 1.5
		})
	});
}
//#endregion
export { usePlayer as a, formatTime as i, PlayerProvider as n, cn as r, Cover as t };
