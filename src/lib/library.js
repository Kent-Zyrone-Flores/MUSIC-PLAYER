/* ------------------------------------------------------------------ */
/*  Types (removed)                                                   */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Default (bundled) music — auto-imported from public/music/playlist */
/* ------------------------------------------------------------------ */

const DEFAULT_PLAYLISTS = [
  {
    id: "ai",
    name: "AI",
    description: "AI-generated tracks",
    cover: "/covers/ai.jpg",
    files: [
      "Hale - Blue Sky (Official Lyric Video).mp3",
      "Owl City & Carly Rae Jepsen - Good Time.mp3",
      "Renegade Stories - Bawat Daan (Rock Cover).mp3",
      "Renegade Stories - Burnout (Rock Cover).mp3",
      "Renegade Stories - Byahe (Rock Cover).mp3",
      "Renegade Stories - Cool Off (Rock Cover).mp3",
      "Renegade Stories - Ikaw Lang Patutunguhan (Rock Cover).mp3",
      "Renegade Stories - Kahel Na Langit (Rock Cover).mp3",
      "Renegade Stories - MULI (Rock Cover).mp3",
      "Renegade Stories - MULTO (Rock Cover).mp3",
      "Renegade Stories - Naiilang (Rock Cover).mp3",
      "Renegade Stories - Nandito Ako (Rock Cover).mp3",
      "Renegade Stories - Oks Lang (Rock Cover).mp3",
      "Renegade Stories - Oksihina (Rock Cover).mp3",
      "Renegade Stories - OO (Rock Cover).mp3",
      "Renegade Stories - Pahina (Rock Cover).mp3",
      "Renegade Stories - Sa Bawat Sandali (Rock Cover).mp3",
      "Renegade Stories - Sa Susunod Na Habang Buhay (Rock Cover).mp3",
      "Renegade Stories - Sagada (Rock Cover).mp3",
      "Renegade Stories - Synesthesia (Rock Cover).mp3",
      "Renegade Stories - Tadhana (Rock Cover).mp3",
      "Renegade Stories - Tunay (Rock Cover).mp3",
      "Renegade Stories - Umaasa Lang Sayo (Rock Cover).mp3",
      "Renegade Stories - Your Song (Rock Cover).mp3",
    ],
  },
  {
    id: "hiphop",
    name: "Hiphop",
    description: "Hip-hop collection",
    cover: "/covers/hiphop.jpg",
    files: [
      "O SIDE MAFIA X BRGR - GET LOW (OFFICIAL MUSIC VIDEO).mp4",
      "Bugoy na Koykoy - Tatlong Wife (Official Music Video).mp4",
      "SAJKA - Nicotine (Official Music Video).mp4",
    ],
  },
  {
    id: "kpop",
    name: "KPOP",
    description: "K-Pop collection",
    cover: "/covers/kpop.jpg",
    files: [
      "TWICE I CAN'T STOP ME M V.mp3",
      "iKON - '사랑을 했다(LOVE SCENARIO)' M V.mp4",
      "BTS (방탄소년단) 'Permission to Dance' Official MV.mp4",
      "BLACKPINK - '불장난 (PLAYING WITH FIRE)' M V.mp4",
      "BABYMONSTER - 'WE GO UP' M V.mp4",
    ],
  },
  {
    id: "luxury-vibes",
    name: "Luxury Vibes",
    description: "Your video music collection",
    cover: "/covers/luxuryvibes.jpg",
    files: [
      "ADÉLA - Ain't In LA.mp4",
      "Astrid S - Hurts So Good.mp4",
      "bye X Kiss It Better - Rihanna & altare.mp4",
      "Doja Cat - Agora Hills.mp4",
      "Doja Cat x The Weeknd x Lana Del Rey - Streets _ One Of The Girls .mp4",
      "50 Cent - Baby By Me ft. Ne-Yo.mp4",
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
    ],
  },
  {
    id: "chris-brown",
    name: "Chris Brown",
    description: "Chris Brown music collection",
    cover: "/covers/chrisbrown.jpg",
    files: [
      "Chris Brown, Young Thug - Go Crazy (Official Video).mp4",
      "Chris Brown - With You (Official HD Video).mp4",
      "Chris Brown - Up To You (Lyrics).mp4",
      "Chris Brown - Undecided (Official Video).mp4",
      "Chris Brown - Superhuman (Lyrics) ft. Keri Hilson.mp4",
      "Chris Brown - It Depends Obvious (Official Video).mp4",
    ],
  },
  {
    id: "bruno-mars",
    name: "Bruno Mars",
    description: "Bruno Mars music collection",
    cover: "/covers/brunomars.jpg",
    files: [
      "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars.mp4",
      "Bruno Mars - Locked Out Of Heaven (Official Music Video).mp4",
      "Bruno Mars - Just The Way You Are (Official Music Video).mp4",
      "Bruno Mars - It Will Rain (Official Music Video).mp4",
      "Bruno Mars - It Will Rain (Official Music Video) (1).mp4",
      "Bruno Mars - I Just Might [Official Music Video].mp4",
      "Bruno Mars - Treasure (Official Music Video).mp4",
      "Bruno Mars - That's What I Like [Official Music Video].mp4",
      "Bruno Mars - Risk It All [Official Music Video].mp4",
      "Bruno Mars - When I Was Your Man (Official Music Video).mp4",
    ],
  },
];

/** Turn the folder list into real Song objects. */
const defaultSongs = DEFAULT_PLAYLISTS.flatMap((pl) =>
  pl.files.map((file, index) => {
    const parsed = parseFileName(file);
    return {
      id: `${pl.id}-${index + 1}`,
      title: parsed.title,
      artist: parsed.artist,
      album: pl.name,
      duration: 0,
      addedAt: 0,
      mediaType: /\.(mp4|webm|mov|mkv)$/i.test(file) ? "video" : "audio",
      source: `/music/playlist/${encodeURIComponent(pl.name === "Luxury Vibes" ? "LuxuryVibes" : pl.name)
        }/${encodeURIComponent(file).replace(/%2F/g, "/")}`,
    };
  }),
);

const defaultPlaylists = DEFAULT_PLAYLISTS.map((pl, i) => ({
  id: pl.id,
  name: pl.name,
  description: pl.description,
  songs: pl.files.map((_, index) => `${pl.id}-${index + 1}`),
  createdAt: i,
  cover: pl.cover,
}));

export const emptyLibrary = {
  songs: defaultSongs,
  playlists: defaultPlaylists,
  favorites: [],
  recent: [],
  volume: 0.8,
  shuffle: false,
  repeat: "off",
};

/* ------------------------------------------------------------------ */
/*  Persistence                                                        */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "harmony-library";

export function loadLibrary() {
  if (typeof window === "undefined") return emptyLibrary;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyLibrary;
    const parsed = JSON.parse(stored);

    // ---- Songs: always include every default song, plus user-imported ones.
    const savedSongs = parsed.songs ?? [];
    const defaultIds = new Set(defaultSongs.map((s) => s.id));
    const userSongs = savedSongs.filter((s) => !defaultIds.has(s.id));
    const mergedSongs = [...defaultSongs, ...userSongs];

    // ---- Playlists: same idea. Defaults first, user-created after.
    const savedPlaylists = parsed.playlists ?? [];
    const defaultPlaylistIds = new Set(defaultPlaylists.map((p) => p.id));
    const userPlaylists = savedPlaylists.filter((p) => !defaultPlaylistIds.has(p.id));

    // For default playlists, prefer the fresh defaults (correct song list + cover),
    // but keep any user renames or added songs from storage.
    const mergedPlaylists = defaultPlaylists.map((def) => {
      const saved = savedPlaylists.find((p) => p.id === def.id);
      if (!saved) return def;
      const extra = saved.songs.filter((id) => !def.songs.includes(id));
      const merged = {
        ...def,
        ...saved,
        cover: def.cover,                                    // 👈 always a string here
        songs: [...def.songs, ...extra],
      };
      return merged;
    });
    mergedPlaylists.push(...userPlaylists);

    return {
      songs: mergedSongs,
      playlists: mergedPlaylists,
      favorites: parsed.favorites ?? [],
      recent: parsed.recent ?? [],
      volume: parsed.volume ?? 0.8,
      shuffle: parsed.shuffle ?? false,
      repeat: parsed.repeat ?? "off",
    };
  } catch {
    return emptyLibrary;
  }
}

export function saveLibrary(library) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  } catch {
    /* private browsing */
  }
}

export function parseFileName(name) {
  const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ").trim();
  const parts = base.split(/\s+[-\u2013]\s+/);
  if (parts.length >= 2) {
    return { artist: parts[0].trim(), title: parts.slice(1).join(" - ").trim() };
  }
  return { artist: "Unknown artist", title: base };
}

export function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export function coverGradient(seed) {
  let hash = 0;
  for (const character of seed) hash = (hash * 31 + character.charCodeAt(0)) | 0;
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(135deg, hsl(${hue} 68% 52%), hsl(${(hue + 48) % 360} 58% 24%))`;
}
