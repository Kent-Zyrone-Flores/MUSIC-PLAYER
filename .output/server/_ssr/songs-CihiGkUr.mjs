import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as usePlayer } from "./Cover-LxhhRftw.mjs";
import { n as PageHeader, t as EmptyState } from "./PageHeader-vwmPfdJm.mjs";
import { t as SongList } from "./SongRow-Bnk9YQbw.mjs";
import { t as ImportButton } from "./ImportButton-B62BvMse.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/songs-CihiGkUr.js
var import_jsx_runtime = require_jsx_runtime();
function Songs() {
	const { songs } = usePlayer();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Songs",
		subtitle: `${songs.length} tracks`,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, {})
	}), songs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		message: "No songs yet.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, { label: "Select music files" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongList, { songs })] });
}
//#endregion
export { Songs as component };
