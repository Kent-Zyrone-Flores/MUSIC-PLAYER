import { Cover } from "@/components/Cover";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";
import { usePlayer } from "@/context/PlayerContext";
import type { Song } from "@/lib/library";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/albums")({
  head: () => ({
    meta: [
      { title: "Albums — Z Music" },
      { name: "description", content: "Browse your local music collection grouped by album." },
      { property: "og:title", content: "Albums — Z Music" },
      { property: "og:description", content: "Browse your local music collection grouped by album." },
    ],
  }),
  component: Albums,
});

function Albums() {
  const { songs } = usePlayer();
  const groups = songs.reduce<Record<string, Song[]>>((acc, song) => {
    (acc[song.album] ??= []).push(song);
    return acc;
  }, {});
  const names = Object.keys(groups).sort();

  return (
    <div>
      <PageHeader title="Albums" subtitle={`${names.length} albums`} />
      {names.length === 0 ? (
        <EmptyState message="Import some music to see albums here." />
      ) : (
        <div className="flex flex-col gap-8">
          {names.map((name) => (
            <section key={name}>
              <div className="mb-3 flex items-center gap-3">
                <Cover seed={name} className="h-14 w-14" />
                <div>
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <p className="text-xs text-muted-foreground">{groups[name]?.length} tracks</p>
                </div>
              </div>
              <SongList songs={groups[name] ?? []} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
