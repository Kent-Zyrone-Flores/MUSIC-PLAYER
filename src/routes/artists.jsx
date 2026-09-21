import { createFileRoute } from "@tanstack/react-router";
import { usePlayer } from "@/context/PlayerContext";
import { Cover } from "@/components/Cover";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Z Music" },
      { name: "description", content: "Browse your local music collection grouped by artist." },
      { property: "og:title", content: "Artists — Z Music" },
      { property: "og:description", content: "Browse your local music collection grouped by artist." },
    ],
  }),
  component: Artists,
});

const coverMap = { "Chris Brown": "chrisbrown", "Bruno Mars": "brunomars", "AI": "ai", "Hiphop": "hiphop", "KPOP": "kpop" };

function Artists() {
  const { songs } = usePlayer();
  const groups = songs.reduce((acc, song) => {
    (acc[song.artist] ??= []).push(song);
    return acc;
  }, {});
  const names = Object.keys(groups).sort();

  return (
    <div>
      <PageHeader title="Artists" subtitle={`${names.length} artists`} />
      {names.length === 0 ? (
        <EmptyState message="Import some music to see artists here." />
      ) : (
        <div className="flex flex-col gap-8">
          {names.map((name) => (
            <section key={name}>
              <div className="mb-3 flex items-center gap-3">
                <Cover seed={name} imageUrl={coverMap[name] ? `/covers/${coverMap[name]}.jpg` : null} className="h-14 w-14 rounded-full" />
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
