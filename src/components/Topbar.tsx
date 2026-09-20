import { ImportButton } from "@/components/ImportButton";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function Topbar() {
  const navigate = useNavigate();
  const search = useRouterState({
    select: (s) => (s.location.pathname === "/search" ? ((s.location.search as { q?: string }).q ?? "") : ""),
  });
  const [value, setValue] = useState(search);

  useEffect(() => setValue(search), [search]);

  return (
    <header className="flex items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur md:px-8">
      <div className="relative flex-1 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={value}
          placeholder="Search songs, artists, albums..."
          onChange={(e) => {
            setValue(e.target.value);
            void navigate({ to: "/search", search: { q: e.target.value }, replace: true });
          }}
          className="w-full rounded-full border border-input bg-surface py-2 pl-9 pr-4 text-sm outline-none transition focus:border-primary"
        />
      </div>
      <ImportButton className="hidden sm:inline-flex" />
    </header>
  );
}
