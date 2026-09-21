import { Cover } from "@/components/Cover";
import { usePlayer } from "@/context/PlayerContext";
import { formatTime } from "@/lib/library";
import { cn } from "@/lib/utils";
import { Heart, ListMusic, Pause, Play, Repeat, Repeat1, Shuffle, SkipBack, SkipForward, Video, VideoOff, Volume2, VolumeX, X,  } from "lucide-react";
import { useState } from "react";

export function PlayerBar() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    next,
    previous,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    shuffle,
    toggleShuffle,
    repeat,
    cycleRepeat,
    toggleFavorite,
    isFavorite,
    queue,
    getSong,
    playSong,
    removeFromQueue,
    showVideo,
    toggleVideo,
  } = usePlayer();
  const [showQueue, setShowQueue] = useState(false);
  const total = duration || currentSong?.duration || 0;

  return (
    <div className="relative">
      {showQueue && (
        <div className="absolute bottom-full right-4 mb-3 max-h-80 w-80 overflow-y-auto rounded-xl border border-border bg-popover p-3 shadow-xl scroll-slim">
          <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Up next
          </p>
          {queue.length === 0 && <p className="px-1 py-2 text-sm text-muted-foreground">Queue is empty.</p>}
          {queue.map((id, i) => {
            const song = getSong(id);
            if (!song) return null;
            return (
              <div key={`${id}-${i}`} className="group flex items-center gap-2 rounded-lg px-1 py-1.5 hover:bg-surface">
                <button
                  type="button"
                  onClick={() => playSong(id, queue)}
                  className="flex min-w-0 flex-1 items-center gap-2 text-left"
                >
                  <Cover seed={song.album + song.artist} imageUrl={song.cover} className="h-8 w-8" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm">{song.title}</span>
                    <span className="block truncate text-xs text-muted-foreground">{song.artist}</span>
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Remove from queue"
                  onClick={() => removeFromQueue(i)}
                  className="text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <footer className="player-shadow flex items-center gap-4 border-t border-border bg-surface px-4 py-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {currentSong ? (
            <>
              <Cover seed={currentSong.album + currentSong.artist} imageUrl={currentSong.cover} className="h-12 w-12" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{currentSong.title}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {currentSong.artist} • {currentSong.album}
                </p>
              </div>
              <button
                type="button"
                aria-label="Toggle favorite"
                onClick={() => toggleFavorite(currentSong.id)}
                className="hidden text-muted-foreground transition hover:text-primary sm:block"
              >
                <Heart className={cn("h-4 w-4", isFavorite(currentSong.id) && "fill-primary text-primary")} />
              </button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Nothing playing yet</p>
          )}
        </div>

        <div className="flex flex-[1.4] flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Shuffle"
              onClick={toggleShuffle}
              className={cn("text-muted-foreground transition hover:text-foreground", shuffle && "text-primary")}
            >
              <Shuffle className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Previous" onClick={previous} className="transition hover:text-primary">
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:brightness-110"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button type="button" aria-label="Next" onClick={next} className="transition hover:text-primary">
              <SkipForward className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Repeat"
              onClick={cycleRepeat}
              className={cn("text-muted-foreground transition hover:text-foreground", repeat !== "off" && "text-primary")}
            >
              {repeat === "one" ? <Repeat1 className="h-4 w-4" /> : <Repeat className="h-4 w-4" />}
            </button>
          </div>
          <div className="hidden w-full items-center gap-2 sm:flex">
            <span className="w-10 text-right text-[11px] tabular-nums text-muted-foreground">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={total || 1}
              step={0.5}
              value={Math.min(currentTime, total)}
              aria-label="Seek"
              onChange={(e) => seek(Number(e.target.value))}
              className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
            />
            <span className="w-10 text-[11px] tabular-nums text-muted-foreground">{formatTime(total)}</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          {currentSong?.mediaType === "video" && (
            <button
              type="button"
              aria-label={showVideo ? "Hide video" : "Show video"}
              onClick={toggleVideo}
              className={cn(
                "text-muted-foreground transition hover:text-foreground",
                showVideo && "text-primary",
              )}
            >
              {showVideo ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </button>
          )}
          <button
            type="button"
            aria-label="Queue"
            onClick={() => setShowQueue((v) => !v)}
            className={cn("text-muted-foreground transition hover:text-foreground", showQueue && "text-primary")}
          >
            <ListMusic className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Mute"
            onClick={() => setVolume(volume > 0 ? 0 : 0.8)}
            className="text-muted-foreground transition hover:text-foreground"
          >
            {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            aria-label="Volume"
            onChange={(e) => setVolume(Number(e.target.value))}
            className="hidden h-1 w-24 cursor-pointer appearance-none rounded-full bg-muted accent-primary md:block"
          />
        </div>
      </footer>
    </div>
  );
}
