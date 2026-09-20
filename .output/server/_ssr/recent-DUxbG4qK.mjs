import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as usePlayer } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recent-DUxbG4qK.js
var import_jsx_runtime = require_jsx_runtime();
function Recent() {
	const { recent } = usePlayer();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Recently played",
		subtitle: `${recent.length} tracks`
	}), recent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { message: "Play something and it will show up here." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs: recent })] });
}
//#endregion
export { Recent as component };
