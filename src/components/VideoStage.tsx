import { usePlayer } from "@/context/PlayerContext";
import { Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VideoStage() {
  const {
    currentSong,
    mediaUrl,
    isPlaying,
    showVideo,
    toggleVideo,
    togglePlay,
    registerVideoElement,
    currentTime,
    duration,
  } = usePlayer();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Position + size (in pixels, viewport coords)
  const [pos, setPos] = useState({ x: 24, y: 24 });
  const [size, setSize] = useState({ w: 384, h: 216 });
  const dragRef = useRef<{ dx: number; dy: number } | null>(null);
  const resizeRef = useRef<{ sx: number; sy: number; w: number; h: number } | null>(null);

  // Register the video element with the context so playback can route through it.
  useEffect(() => {
    registerVideoElement(videoRef.current);
    return () => registerVideoElement(null);
  }, [registerVideoElement, showVideo]);

  // After the video is mounted, make sure it's the one playing when active.
  useEffect(() => {
    if (!showVideo) return;
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = currentTime;
    if (isPlaying) void el.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showVideo]);

  // ---- Drag ----
  const onPointerDownDrag = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    dragRef.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMoveDrag = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const x = Math.max(0, Math.min(window.innerWidth - size.w, e.clientX - dragRef.current.dx));
    const y = Math.max(0, Math.min(window.innerHeight - size.h, e.clientY - dragRef.current.dy));
    setPos({ x, y });
  };
  const onPointerUpDrag = (e: React.PointerEvent) => {
    dragRef.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // ---- Resize (bottom-right handle) ----
  const onPointerDownResize = (e: React.PointerEvent) => {
    e.stopPropagation();
    resizeRef.current = { sx: e.clientX, sy: e.clientY, w: size.w, h: size.h };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMoveResize = (e: React.PointerEvent) => {
    if (!resizeRef.current) return;
    const { sx, sy, w, h } = resizeRef.current;
    const nw = Math.max(240, w + (e.clientX - sx));
    const nh = Math.max(135, h + (e.clientY - sy));
    setSize({ w: nw, h: nh });
  };
  const onPointerUpResize = (e: React.PointerEvent) => {
    resizeRef.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  if (!showVideo || !currentSong || currentSong.mediaType !== "video" || !mediaUrl) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed z-50 overflow-hidden rounded-xl border border-border bg-black shadow-2xl select-none"
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h }}
    >
      {/* Draggable header */}
      <div
        onPointerDown={onPointerDownDrag}
        onPointerMove={onPointerMoveDrag}
        onPointerUp={onPointerUpDrag}
        className="flex cursor-move items-center justify-between gap-2 bg-surface px-3 py-1.5 text-xs"
      >
        <span className="truncate font-medium">{currentSong.title}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={togglePlay}
            className="text-muted-foreground transition hover:text-foreground"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={toggleVideo}
            aria-label="Hide video"
            className="text-muted-foreground transition hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* The video itself. No `muted` — audio comes from here when in video mode. */}
      <video
        ref={videoRef}
        src={mediaUrl}
        playsInline
        controls
        className="block h-[calc(100%-28px)] w-full bg-black"
      />

      {/* Resize handle */}
      <div
        onPointerDown={onPointerDownResize}
        onPointerMove={onPointerMoveResize}
        onPointerUp={onPointerUpResize}
        className="absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.4) 50%)",
        }}
      />
      {/* Hidden helper to satisfy `duration` unused warning when needed */}
      <span className="hidden">{duration}</span>
    </div>
  );
}