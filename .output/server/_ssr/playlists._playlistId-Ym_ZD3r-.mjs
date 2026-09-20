import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as Play, i as Trash2 } from "../_libs/lucide-react.mjs";
import { a as usePlayer, t as Cover } from "./Cover-LxhhRftw.mjs";
import { t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./playlists._playlistId-D7wzCBjJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playlists._playlistId-Ym_ZD3r-.js
var import_jsx_runtime = require_jsx_runtime();
function PlaylistDetail() {
	const { playlistId } = Route.useParams();
	const navigate = useNavigate();
	const { playlists, songs, playSong, deletePlaylist, removeFromPlaylist } = usePlayer();
	const playlist = playlists.find((p) => p.id === playlistId);
	if (!playlist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "This playlist no longer exists." });
	const tracks = playlist.songs.map((id) => songs.find((s) => s.id === id)).filter((s) => Boolean(s));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hero-gradient mb-6 flex flex-wrap items-end gap-5 rounded-2xl px-6 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
			seed: playlist.name,
			imageUrl: playlist.cover,
			className: "h-32 w-32"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: "Playlist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold md:text-4xl",
					children: playlist.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						playlist.description ? `${playlist.description} • ` : "",
						tracks.length,
						" tracks"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: !tracks.length,
						onClick: () => tracks[0] && playSong(tracks[0].id, tracks.map((t) => t.id)),
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Play"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							deletePlaylist(playlist.id);
							navigate({ to: "/playlists" });
						},
						className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete"]
					})]
				})
			]
		})]
	}), tracks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Add songs from your library using the menu on each track." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, {
		songs: tracks,
		onRemoveFromPlaylist: (id) => removeFromPlaylist(playlist.id, id)
	})] });
}
//#endregion
export { PlaylistDetail as component };
