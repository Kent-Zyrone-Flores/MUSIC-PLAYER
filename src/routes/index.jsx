import { Cover } from "@/components/Cover";
import { ImportButton } from "@/components/ImportButton";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";
import { usePlayer } from "@/context/PlayerContext";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const zLogo = "/images/zlogo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Z Music — Your local music player" },
      {
        name: "description",
        content: "Play the music files stored on your own computer with playlists, favorites and a queue.",
      },
      { property: "og:title", content: "Z Music — Your local music player" },
      {
        property: "og:description",
        content: "Play the music files stored on your own computer with playlists, favorites and a queue.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: zLogo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: zLogo },
    ],
    links: [
      { rel: "icon", href: zLogo },
      { rel: "apple-touch-icon", href: zLogo },
    ],
  }),
  component: Home,
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function Home() {
  const { songs, recent, playlists, playSong, favorites } = usePlayer();
  // Computed after mount so the server and client render the same first pass.
  const [title, setTitle] = useState("Welcome back");
  useEffect(() => setTitle(greeting()), []);
  const recentlyAdded = [...songs].sort((a, b) => b.addedAt - a.addedAt).slice(0, 8);
  const favoriteSongs = songs.filter((s) => favorites.includes(s.id)).slice(0, 6);

  return (
    <div>
      <PageHeader
        title={title}
        subtitle={songs.length ? `${songs.length} tracks in your library` : "Add your downloaded music to get started"}
        action={<ImportButton />}
      />

      {songs.length === 0 ? (
        <EmptyState
          message="Your library is empty. Import MP3, WAV, OGG, FLAC or M4A files from your computer."
          action={<ImportButton label="Select music files" />}
        />
      ) : (
        <div className="flex flex-col gap-10">
          {recent.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Recently played</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {recent.slice(0, 5).map((song) => (
                  <button
                    key={song.id}
                    type="button"
                    onClick={() => playSong(song.id)}
                    className="group rounded-xl bg-surface p-3 text-left transition hover:bg-surface-raised"
                  >
                    <div className="relative">
                      <Cover seed={song.album + song.artist} imageUrl={song.cover} className="aspect-square w-full" />
                      <span className="absolute bottom-2 right-2 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        <Play className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-2 truncate text-sm font-medium">{song.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{song.artist}</p>
                  </button>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="mb-3 text-lg font-semibold">Recently added</h2>
            <SongList songs={recentlyAdded} />
          </section>

          {favoriteSongs.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Favorites</h2>
              <SongList songs={favoriteSongs} />
            </section>
          )}

          {playlists.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Your playlists</h2>
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
                    <p className="truncate text-xs text-muted-foreground">{p.songs.length} tracks</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
