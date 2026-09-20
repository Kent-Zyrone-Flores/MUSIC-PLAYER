import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as Plus } from "../_libs/lucide-react.mjs";
import { a as usePlayer, t as Cover } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playlists.index-CVbjxIIU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Playlists() {
	const { playlists, createPlaylist } = usePlayer();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Playlists",
			subtitle: `${playlists.length} playlists`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((v) => !v),
				className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create playlist"]
			})
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:max-w-md",
			onSubmit: (e) => {
				e.preventDefault();
				if (!name.trim()) return;
				createPlaylist(name.trim(), description.trim());
				setName("");
				setDescription("");
				setOpen(false);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Playlist name",
					className: "rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: description,
					onChange: (e) => setDescription(e.target.value),
					placeholder: "Description (optional)",
					className: "rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110",
					children: "Create"
				})
			]
		}),
		playlists.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "No playlists yet. Create one and add songs from the library." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: p.description || `${p.songs.length} tracks`
					})
				]
			}, p.id))
		})
	] });
}
//#endregion
export { Playlists as component };
