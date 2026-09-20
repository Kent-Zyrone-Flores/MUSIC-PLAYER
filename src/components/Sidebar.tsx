import { ImportButton } from "@/components/ImportButton";
import { usePlayer } from "@/context/PlayerContext";
import { Link } from "@tanstack/react-router";
import { Clock, Disc3, Heart, Home, ListMusic, Mic2, Music4 } from "lucide-react";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/songs", label: "Songs", icon: Music4 },
  { to: "/albums", label: "Albums", icon: Disc3 },
  { to: "/artists", label: "Artists", icon: Mic2 },
] as const;

const lists = [
  { to: "/playlists", label: "Playlists", icon: ListMusic },
  { to: "/favorites", label: "Favorites", icon: Heart },
  { to: "/recent", label: "Recently played", icon: Clock },
] as const;

export function Sidebar() {
  const { playlists } = usePlayer();

  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-6 overflow-y-auto border-r border-sidebar-border bg-sidebar px-4 py-6 scroll-slim md:flex">
      <Link to="/" className="flex items-center gap-2 px-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Music4 className="h-5 w-5" />
        </span>
        <span className="font-display text-lg font-semibold">Z Music</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-1">
        <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Your library
        </p>
        {lists.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </div>

      {playlists.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Playlists
          </p>
          {playlists.map((p) => (
            <Link
              key={p.id}
              to="/playlists/$playlistId"
              params={{ playlistId: p.id }}
              activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
              className="truncate rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}

      <ImportButton className="mt-auto w-full justify-center" />
    </aside>
  );
}
