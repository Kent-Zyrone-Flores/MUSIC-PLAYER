import { createFileRoute } from "@tanstack/react-router";
import { usePlayer } from "@/context/PlayerContext";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites — Z Music" },
      { name: "description", content: "The tracks you marked with a heart in your local music library." },
      { property: "og:title", content: "Favorites — Z Music" },
      { property: "og:description", content: "The tracks you marked with a heart in your local music library." },
    ],
  }),
  component: Favorites,
});

function Favorites() {
  const { songs, favorites } = usePlayer();
  const list = songs.filter((s) => favorites.includes(s.id));
  return (
    <div>
      <PageHeader title="Favorites" subtitle={`${list.length} tracks`} />
      {list.length === 0 ? (
        <EmptyState message="Tap the heart on any song to keep it here." />
      ) : (
        <SongList songs={list} />
      )}
    </div>
  );
}
