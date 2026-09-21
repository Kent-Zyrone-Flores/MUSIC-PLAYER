import { Cover } from "@/components/Cover";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";
import { usePlayer } from "@/context/PlayerContext";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  validateSearch: (search) => ({ q: search["q"] ?? "" }),
  head: () => ({
    meta: [
      { title: "Search — Z Music" },
      { name: "description", content: "Search songs, artists, albums and playlists in your library." },
      { property: "og:title", content: "Search — Z Music" },
      { property: "og:description", content: "Search songs, artists, albums and playlists in your library." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const { songs, playlists } = usePlayer();
  const term = q.trim().toLowerCase();

  if (!term) {
    return (
      <div>
        <PageHeader title="Search" subtitle="Find anything in your library" />
        <EmptyState message="Start typing in the search box above." />
      </div>
    );
  }

  const matchedSongs = songs.filter((s) =>
    [s.title, s.artist, s.album].some((v) => v.toLowerCase().includes(term)),
  );
  const artists = [...new Set(songs.map((s) => s.artist))].filter((a) => a.toLowerCase().includes(term));
  const albums = [...new Set(songs.map((s) => s.album))].filter((a) => a.toLowerCase().includes(term));
  const matchedPlaylists = playlists.filter((p) => p.name.toLowerCase().includes(term));
  const nothing = !matchedSongs.length && !artists.length && !albums.length && !matchedPlaylists.length;

  return (
    <div>
      <PageHeader title={`Results for "${q}"`} />
      {nothing ? (
        <EmptyState message="Nothing matched your search." />
      ) : (
        <div className="flex flex-col gap-8">
          {matchedSongs.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Songs</h2>
              <SongList songs={matchedSongs} />
            </section>
          )}
          {artists.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Artists</h2>
              <ul className="flex flex-wrap gap-3">
                {artists.map((a) => (
                  <li key={a} className="rounded-full bg-surface px-4 py-2 text-sm">
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {albums.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Albums</h2>
              <ul className="flex flex-wrap gap-3">
                {albums.map((a) => (
                  <li key={a} className="rounded-full bg-surface px-4 py-2 text-sm">
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {matchedPlaylists.length > 0 && (
            <section>
              <h2 className="mb-3 text-lg font-semibold">Playlists</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {matchedPlaylists.map((p) => (
                  <Link
                    key={p.id}
                    to="/playlists/$playlistId"
                    params={{ playlistId: p.id }}
                    className="rounded-xl bg-surface p-3 transition hover:bg-surface-raised"
                  >
                    <Cover seed={p.name} imageUrl={p.cover} className="aspect-square w-full" />
                    <p className="mt-2 truncate text-sm font-medium">{p.name}</p>
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
