import { Cover } from "@/components/Cover";
import { EmptyState } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";
import { usePlayer } from "@/context/PlayerContext";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Play, Trash2 } from "lucide-react";

export const Route = createFileRoute("/playlists/$playlistId")({
  head: () => ({
    meta: [
      { title: "Playlist — Z Music" },
      { name: "description", content: "Play and edit the songs in this playlist." },
      { property: "og:title", content: "Playlist — Z Music" },
      { property: "og:description", content: "Play and edit the songs in this playlist." },
    ],
  }),
  component: PlaylistDetail,
});

function PlaylistDetail() {
  const { playlistId } = Route.useParams();
  const navigate = useNavigate();
  const { playlists, songs, playSong, deletePlaylist, removeFromPlaylist } = usePlayer();
  const playlist = playlists.find((p) => p.id === playlistId);

  if (!playlist) {
    return <EmptyState message="This playlist no longer exists." />;
  }

  const tracks = playlist.songs
    .map((id) => songs.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div>
      <div className="hero-gradient mb-6 flex flex-wrap items-end gap-5 rounded-2xl px-6 py-8">
        <Cover seed={playlist.name} imageUrl={playlist.cover} className="h-32 w-32" />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Playlist</p>
          <h1 className="text-3xl font-semibold md:text-4xl">{playlist.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {playlist.description ? `${playlist.description} • ` : ""}
            {tracks.length} tracks
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              disabled={!tracks.length}
              onClick={() => tracks[0] && playSong(tracks[0].id, tracks.map((t) => t.id))}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-50"
            >
              <Play className="h-4 w-4" /> Play
            </button>
            <button
              type="button"
              onClick={() => {
                deletePlaylist(playlist.id);
                void navigate({ to: "/playlists" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </div>
      </div>

      {tracks.length === 0 ? (
        <EmptyState message="Add songs from your library using the menu on each track." />
      ) : (
        <SongList songs={tracks} onRemoveFromPlaylist={(id) => removeFromPlaylist(playlist.id, id)} />
      )}
    </div>
  );
}
