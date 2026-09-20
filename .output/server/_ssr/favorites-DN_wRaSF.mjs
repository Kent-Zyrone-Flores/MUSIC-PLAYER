import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as usePlayer } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favorites-DN_wRaSF.js
var import_jsx_runtime = require_jsx_runtime();
function Favorites() {
	const { songs, favorites } = usePlayer();
	const list = songs.filter((s) => favorites.includes(s.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Favorites",
		subtitle: `${list.length} tracks`
	}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Tap the heart on any song to keep it here." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: list })] });
}
//#endregion
export { Favorites as component };
