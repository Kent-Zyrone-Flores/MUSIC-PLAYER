import { createFileRoute } from "@tanstack/react-router";
import { usePlayer } from "@/context/PlayerContext";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";

export const Route = createFileRoute("/recent")({
  head: () => ({
    meta: [
      { title: "Recently played — Z Music" },
      { name: "description", content: "Pick up where you left off with your recently played tracks." },
      { property: "og:title", content: "Recently played — Z Music" },
      { property: "og:description", content: "Pick up where you left off with your recently played tracks." },
    ],
  }),
  component: Recent,
});

function Recent() {
  const { recent } = usePlayer();
  return (
    <div>
      <PageHeader title="Recently played" subtitle={`${recent.length} tracks`} />
      {recent.length === 0 ? (
        <EmptyState message="Play something and it will show up here." />
      ) : (
        <SongList songs={recent} />
      )}
    </div>
  );
}
