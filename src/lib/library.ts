export type RepeatMode = "off" | "all" | "one";

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  addedAt: number;
  mediaType: "audio" | "video";
  source?: string;
};

export type Playlist = {
  id: string;
  name: string;
  description: string;
  songs: string[];
  createdAt: number;
  cover?: string;
};

export type LibraryState = {
  songs: Song[];
  playlists: Playlist[];
  favorites: string[];
  recent: string[];
  volume: number;
  shuffle: boolean;
  repeat: RepeatMode;
};

const luxuryVibesFiles = [
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
  "YAD (Яд) ENGLISH VERSION.mp4",
];

const defaultSongs: Song[] = luxuryVibesFiles.map((file, index) => {
  const parsed = parseFileName(file);
  return {
    id: `luxury-vibes-${index + 1}`,
    title: parsed.title,
    artist: parsed.artist,
    album: "Luxury Vibes",
    duration: 0,
    addedAt: 0,
    mediaType: "video",
    source: `/music/playlist/LuxuryVibes/${encodeURIComponent(file).replace(/%2F/g, "/")}`,
  };
});

export const emptyLibrary: LibraryState = {
  songs: defaultSongs,
  playlists: [
    {
      id: "luxury-vibes",
      name: "Luxury Vibes",
      description: "Your imported video music collection",
      songs: defaultSongs.map((song) => song.id),
      createdAt: 0,
      cover: "/covers/luxuryvibes.jpg",
    },
  ],
  favorites: [],
  recent: [],
  volume: 0.8,
  shuffle: false,
  repeat: "off",
};

const STORAGE_KEY = "harmony-library";

export function loadLibrary(): LibraryState {
  if (typeof window === "undefined") return emptyLibrary;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyLibrary;
    const parsed = JSON.parse(stored) as Partial<LibraryState>;
    return {
      ...emptyLibrary,
      ...parsed,
      songs: parsed.songs?.length ? parsed.songs : emptyLibrary.songs,
      playlists: parsed.playlists?.length ? parsed.playlists : emptyLibrary.playlists,
    };
  } catch {
    return emptyLibrary;
  }
}

export function saveLibrary(library: LibraryState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }
}

export function parseFileName(name: string): { title: string; artist: string } {
  const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ").trim();
  const parts = base.split(/\s+[-\u2013]\s+/);
  if (parts.length >= 2) {
    return { artist: parts[0].trim(), title: parts.slice(1).join(" - ").trim() };
  }
  return { artist: "Unknown artist", title: base };
}

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function coverGradient(seed: string): string {
  let hash = 0;
  for (const character of seed) hash = (hash * 31 + character.charCodeAt(0)) | 0;
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(135deg, hsl(${hue} 68% 52%), hsl(${(hue + 48) % 360} 58% 24%))`;
}
