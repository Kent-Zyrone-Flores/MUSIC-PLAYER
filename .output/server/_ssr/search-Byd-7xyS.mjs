import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as usePlayer, t as Cover } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./search-CPaz01hH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-Byd-7xyS.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q } = Route.useSearch();
	const { songs, playlists } = usePlayer();
	const term = q.trim().toLowerCase();
	if (!term) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Search",
		subtitle: "Find anything in your library"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Start typing in the search box above." })] });
	const matchedSongs = songs.filter((s) => [
		s.title,
		s.artist,
		s.album
	].some((v) => v.toLowerCase().includes(term)));
	const artists = [...new Set(songs.map((s) => s.artist))].filter((a) => a.toLowerCase().includes(term));
	const albums = [...new Set(songs.map((s) => s.album))].filter((a) => a.toLowerCase().includes(term));
	const matchedPlaylists = playlists.filter((p) => p.name.toLowerCase().includes(term));
	const nothing = !matchedSongs.length && !artists.length && !albums.length && !matchedPlaylists.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: `Results for "${q}"` }), nothing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Nothing matched your search." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			matchedSongs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Songs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: matchedSongs })] }),
			artists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Artists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: artists.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full bg-surface px-4 py-2 text-sm",
					children: a
				}, a))
			})] }),
			albums.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Albums"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: albums.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full bg-surface px-4 py-2 text-sm",
					children: a
				}, a))
			})] }),
			matchedPlaylists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Playlists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: matchedPlaylists.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/playlists/$playlistId",
					params: { playlistId: p.id },
					className: "rounded-xl bg-surface p-3 transition hover:bg-surface-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
						seed: p.name,
						imageUrl: p.cover,
						className: "aspect-square w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 truncate text-sm font-medium",
						children: p.name
					})]
				}, p.id))
			})] })
		]
	})] });
}
//#endregion
export { SearchPage as component };
