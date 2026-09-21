import { createFileRoute } from "@tanstack/react-router";
import { usePlayer } from "@/context/PlayerContext";
import { ImportButton } from "@/components/ImportButton";
import { EmptyState, PageHeader } from "@/components/PageHeader";
import { SongList } from "@/components/SongRow";

export const Route = createFileRoute("/songs")({
  head: () => ({
    meta: [
      { title: "All songs — Z Music" },
      { name: "description", content: "Every track in your local music library, ready to play." },
      { property: "og:title", content: "All songs — Z Music" },
      { property: "og:description", content: "Every track in your local music library, ready to play." },
    ],
  }),
  component: Songs,
});

function Songs() {
  const { songs } = usePlayer();
  return (
    <div>
      <PageHeader title="Songs" subtitle={`${songs.length} tracks`} action={<ImportButton />} />
      {songs.length === 0 ? (
        <EmptyState message="No songs yet." action={<ImportButton label="Select music files" />} />
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}
