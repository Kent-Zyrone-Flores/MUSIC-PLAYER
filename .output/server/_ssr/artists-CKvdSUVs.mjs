import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as usePlayer, t as Cover } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artists-CKvdSUVs.js
var import_jsx_runtime = require_jsx_runtime();
function Artists() {
	const { songs } = usePlayer();
	const groups = songs.reduce((acc, song) => {
		(acc[song.artist] ??= []).push(song);
		return acc;
	}, {});
	const names = Object.keys(groups).sort();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Artists",
		subtitle: `${names.length} artists`
	}), names.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Import some music to see artists here." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-8",
		children: names.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
				seed: name,
				className: "h-14 w-14 rounded-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [groups[name]?.length, " tracks"]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: groups[name] ?? [] })] }, name))
	})] });
}
//#endregion
export { Artists as component };
