import { usePlayer } from "@/context/PlayerContext";
import { cn } from "@/lib/utils";
import { Loader2, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function ImportButton({ className, label = "Add music" }: { className?: string; label?: string }) {
  const { importFiles } = usePlayer();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="audio/*,video/*,.mp3,.wav,.ogg,.flac,.m4a,.aac,.mp4,.webm,.mov,.mkv"
        multiple
        className="hidden"
        onChange={async (e) => {
          const files = e.target.files;
          if (!files?.length) return;
          setBusy(true);
          const count = await importFiles(files);
          setBusy(false);
          e.target.value = "";
          toast[count ? "success" : "error"](
            count ? `Added ${count} track${count > 1 ? "s" : ""}` : "No supported audio files found",
          );
        }}
      />
      <button
        type="button"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60",
          className,
        )}
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
        {label}
      </button>
    </>
  );
}
