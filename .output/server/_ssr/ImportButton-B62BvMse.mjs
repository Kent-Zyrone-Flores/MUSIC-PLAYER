import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as LoaderCircle, d as Plus } from "../_libs/lucide-react.mjs";
import { a as usePlayer, r as cn } from "./Cover-LxhhRftw.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImportButton-B62BvMse.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImportButton({ className, label = "Add music" }) {
	const { importFiles } = usePlayer();
	const inputRef = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref: inputRef,
		type: "file",
		accept: "audio/*,video/*,.mp3,.wav,.ogg,.flac,.m4a,.aac,.mp4,.webm,.mov,.mkv",
		multiple: true,
		className: "hidden",
		onChange: async (e) => {
			const files = e.target.files;
			if (!files?.length) return;
			setBusy(true);
			const count = await importFiles(files);
			setBusy(false);
			e.target.value = "";
			toast[count ? "success" : "error"](count ? `Added ${count} track${count > 1 ? "s" : ""}` : "No supported audio files found");
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: busy,
		onClick: () => inputRef.current?.click(),
		className: cn("inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60", className),
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), label]
	})] });
}
//#endregion
export { ImportButton as t };
