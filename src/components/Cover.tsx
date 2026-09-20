import { coverGradient } from "@/lib/library";
import { cn } from "@/lib/utils";
import { Music2 } from "lucide-react";

export function Cover({
  seed,
  className,
  iconClassName,
  imageUrl,
}: {
  seed: string;
  className?: string;
  iconClassName?: string;
  imageUrl?: string | undefined;   // 👈 add | undefined
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-md",
        className,
      )}
      style={{ backgroundImage: coverGradient(seed) }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        <Music2 className={cn("h-1/3 w-1/3 opacity-70", iconClassName)} strokeWidth={1.5} />
      )}
    </div>
  );
}