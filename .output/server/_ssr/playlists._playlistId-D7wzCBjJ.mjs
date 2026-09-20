import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playlists._playlistId-D7wzCBjJ.js
var $$splitComponentImporter = () => import("./playlists._playlistId-Ym_ZD3r-.mjs");
var Route = createFileRoute("/playlists/$playlistId")({
	head: () => ({ meta: [
		{ title: "Playlist — Z Music" },
		{
			name: "description",
			content: "Play and edit the songs in this playlist."
		},
		{
			property: "og:title",
			content: "Playlist — Z Music"
		},
		{
			property: "og:description",
			content: "Play and edit the songs in this playlist."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
