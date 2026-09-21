import { Cover } from "@/components/Cover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,  } from "@/components/ui/dropdown-menu";
import { usePlayer } from "@/context/PlayerContext";
import { formatTime } from "@/lib/library";
import { cn } from "@/lib/utils";
import { Download, Heart, ListPlus, Pause, Play, Trash2 } from "lucide-react";

export function SongRow({ song, index, list, onRemoveFromPlaylist }) {
  const { currentSong, isPlaying, playSong, togglePlay, toggleFavorite, isFavorite, playlists, addToPlaylist, removeSong, downloadSong } =
    usePlayer();
  const active = currentSong?.id === song.id;

  return (
    <div
      className={cn(
        "group grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-surface md:grid-cols-[2rem_3fr_2fr_auto_auto]",
        active && "bg-surface",
      )}
      onDoubleClick={() => playSong(song.id, list)}
    >
      <button
        type="button"
        onClick={() => (active ? togglePlay() : playSong(song.id, list))}
        className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
        aria-label={active && isPlaying ? "Pause" : `Play ${song.title}`}
      >
        <span className="text-sm group-hover:hidden">{active ? "♪" : index + 1}</span>
        <span className="hidden group-hover:block">
          {active && isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </span>
      </button>

      <div className="flex min-w-0 items-center gap-3">
        <div className="relative">
          <Cover seed={song.album + song.artist} imageUrl={song.cover} className="h-10 w-10" />
          {song.mediaType === "video" && <span className="absolute -bottom-1 -right-1 rounded bg-primary px-1 text-[9px] font-bold text-primary-foreground">VIDEO</span>}
        </div>
        <div className="min-w-0">
          <p className={cn("truncate text-sm font-medium", active && "text-primary")}>{song.title}</p>
          <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
        </div>
      </div>

      <p className="hidden truncate text-sm text-muted-foreground md:block">{song.album}</p>

      <button
        type="button"
        onClick={() => toggleFavorite(song.id)}
        aria-label="Toggle favorite"
        className="text-muted-foreground transition hover:text-primary"
      >
        <Heart className={cn("h-4 w-4", isFavorite(song.id) && "fill-primary text-primary")} />
      </button>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => void downloadSong(song.id)}
          aria-label={`Download ${song.title}`}
          className="text-muted-foreground transition hover:text-primary"
        >
          <Download className="h-4 w-4" />
        </button>
        <span className="w-10 text-right text-xs tabular-nums text-muted-foreground">
          {formatTime(song.duration)}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="More options" className="text-muted-foreground transition hover:text-foreground">
            <ListPlus className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            {playlists.length === 0 && (
              <DropdownMenuItem disabled>No playlists yet</DropdownMenuItem>
            )}
            {playlists.map((p) => (
              <DropdownMenuItem key={p.id} onSelect={() => addToPlaylist(p.id, song.id)}>
                Add to {p.name}
              </DropdownMenuItem>
            ))}
            {onRemoveFromPlaylist && (
              <DropdownMenuItem onSelect={onRemoveFromPlaylist}>Remove from playlist</DropdownMenuItem>
            )}
            <DropdownMenuItem onSelect={() => removeSong(song.id)} className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" /> Delete from library
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export function SongList({ songs, onRemoveFromPlaylist }) {
  const ids = songs.map((s) => s.id);
  return (
    <div className="flex flex-col">
      {songs.map((song, i) => (
        <SongRow
          key={song.id}
          song={song}
          index={i}
          list={ids}
          {...(onRemoveFromPlaylist ? { onRemoveFromPlaylist: () => onRemoveFromPlaylist(song.id) } : {})}
        />
      ))}
    </div>
  );
}
