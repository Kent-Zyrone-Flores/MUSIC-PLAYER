export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// "Artist - Title.mp3" => { artist, title }
export function parseFileName(name: string) {
  const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ").trim();
  const parts = base.split(/\s+[-–]\s+/);
  if (parts.length >= 2) {
    return { artist: parts[0].trim(), title: parts.slice(1).join(" - ").trim() };
  }
  return { artist: "Unknown artist", title: base };
}

export function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const a = copy[index];
    const b = copy[swapIndex];
    if (a === undefined || b === undefined) continue;   // 👈 guard
    copy[index] = b;
    copy[swapIndex] = a;
  }
  return copy;
}

export function parseFileName(name: string): { title: string; artist: string } {
  const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/_/g, " ").trim();
  const parts = base.split(/\s+[-\u2013]\s+/);
  const first = parts[0];                                // 👈 narrow it
  if (first && parts.length >= 2) {
    return { artist: first.trim(), title: parts.slice(1).join(" - ").trim() };
  }
  return { artist: "Unknown artist", title: base };
}