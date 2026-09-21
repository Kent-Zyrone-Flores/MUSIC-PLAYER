import { Cover } from "@/components/Cover";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { usePlayer } from "@/context/PlayerContext";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/playlists/")({
  head: () => ({
    meta: [
      { title: "Playlists — Z Music" },
      { name: "description", content: "Create and manage your own playlists from your local music." },
      { property: "og:title", content: "Playlists — Z Music" },
      { property: "og:description", content: "Create and manage your own playlists from your local music." },
    ],
  }),
  component: Playlists,
});

function Playlists() {
  const { playlists, createPlaylist } = usePlayer();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <PageHeader
        title="Playlists"
        subtitle={`${playlists.length} playlists`}
        action={
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            <Plus className="h-4 w-4" /> Create playlist
          </button>
        }
      />

      {open && (
        <form
          className="mb-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            createPlaylist(name.trim(), description.trim());
            setName("");
            setDescription("");
            setOpen(false);
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Playlist name"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Create
          </button>
        </form>
      )}

      {playlists.length === 0 ? (
        <EmptyState message="No playlists yet. Create one and add songs from the library." />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {playlists.map((p) => (
            <Link
              key={p.id}
              to="/playlists/$playlistId"
              params={{ playlistId: p.id }}
              className="rounded-xl bg-surface p-3 transition hover:bg-surface-raised"
            >
              <Cover seed={p.name} imageUrl={p.cover} className="aspect-square w-full" />
              <p className="mt-2 truncate text-sm font-medium">{p.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {p.description || `${p.songs.length} tracks`}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
