import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as Play } from "../_libs/lucide-react.mjs";
import { a as usePlayer, t as Cover } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ImportButton } from "./ImportButton-B62BvMse.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dwi-l4O5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function greeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	if (h < 12) return "Good morning";
	if (h < 18) return "Good afternoon";
	return "Good evening";
}
function Home() {
	const { songs, recent, playlists, playSong, favorites } = usePlayer();
	const [title, setTitle] = (0, import_react.useState)("Welcome back");
	(0, import_react.useEffect)(() => setTitle(greeting()), []);
	const recentlyAdded = [...songs].sort((a, b) => b.addedAt - a.addedAt).slice(0, 8);
	const favoriteSongs = songs.filter((s) => favorites.includes(s.id)).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title,
		subtitle: songs.length ? `${songs.length} tracks in your library` : "Add your downloaded music to get started",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, {})
	}), songs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		message: "Your library is empty. Import MP3, WAV, OGG, FLAC or M4A files from your computer.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, { label: "Select music files" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Recently played"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
				children: recent.slice(0, 5).map((song) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => playSong(song.id),
					className: "group rounded-xl bg-surface p-3 text-left transition hover:bg-surface-raised",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
								seed: song.album + song.artist,
								className: "aspect-square w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-2 right-2 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 truncate text-sm font-medium",
							children: song.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: song.artist
						})
					]
				}, song.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Recently added"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: recentlyAdded })] }),
			favoriteSongs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Favorites"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: favoriteSongs })] }),
			playlists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Your playlists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: playlists.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/playlists/$playlistId",
					params: { playlistId: p.id },
					className: "rounded-xl bg-surface p-3 transition hover:bg-surface-raised",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
							seed: p.name,
							imageUrl: p.cover,
							className: "aspect-square w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 truncate text-sm font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: [p.songs.length, " tracks"]
						})
					]
				}, p.id))
			})] })
		]
	})] });
}
//#endregion
export { Home as component };
