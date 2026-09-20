import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CPaz01hH.js
var $$splitComponentImporter = () => import("./search-Byd-7xyS.mjs");
var Route = createFileRoute("/search")({
	validateSearch: (search) => ({ q: search["q"] ?? "" }),
	head: () => ({ meta: [
		{ title: "Search — Z Music" },
		{
			name: "description",
			content: "Search songs, artists, albums and playlists in your library."
		},
		{
			property: "og:title",
			content: "Search — Z Music"
		},
		{
			property: "og:description",
			content: "Search songs, artists, albums and playlists in your library."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
