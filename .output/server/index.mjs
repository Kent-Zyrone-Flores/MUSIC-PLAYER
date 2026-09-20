globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/albums-WJR-Ae3y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-J15beYKDma0qfpkNmhdmxlPKCZA\"",
		"mtime": "2026-09-20T13:29:50.974Z",
		"size": 901,
		"path": "../public/assets/albums-WJR-Ae3y.js"
	},
	"/assets/artists-cpYNDifi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"396-xey8Qx1bag1tzy9CNL0TAwRSvts\"",
		"mtime": "2026-09-20T13:29:50.975Z",
		"size": 918,
		"path": "../public/assets/artists-cpYNDifi.js"
	},
	"/assets/favorites-CtQtowYv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-e3AQbxXFk6If39gq2adwcxZB9P8\"",
		"mtime": "2026-09-20T13:29:50.976Z",
		"size": 452,
		"path": "../public/assets/favorites-CtQtowYv.js"
	},
	"/assets/Cover-GmuoUIGE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3f4-VY4p4K8aX+xL9qtfjESaad+SLx0\"",
		"mtime": "2026-09-20T13:29:50.969Z",
		"size": 50164,
		"path": "../public/assets/Cover-GmuoUIGE.js"
	},
	"/assets/ImportButton-BwysESbE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86dc-DJtqDrMy1VWUtdcDgzy2mfznQUs\"",
		"mtime": "2026-09-20T13:29:50.970Z",
		"size": 34524,
		"path": "../public/assets/ImportButton-BwysESbE.js"
	},
	"/assets/link-xl4KRL4L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b1e-7kYzXu/qfXLw8FQSLww2+GxBYM4\"",
		"mtime": "2026-09-20T13:29:50.977Z",
		"size": 23326,
		"path": "../public/assets/link-xl4KRL4L.js"
	},
	"/assets/PageHeader-CdnRrfRN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ad-3euaqBp6D/RUmzBxOT/CqPr2tVI\"",
		"mtime": "2026-09-20T13:29:50.971Z",
		"size": 685,
		"path": "../public/assets/PageHeader-CdnRrfRN.js"
	},
	"/assets/play-CoS4CEj0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"214-5UbVgeuz7mxTYgykLv9U09eBphg\"",
		"mtime": "2026-09-20T13:29:50.978Z",
		"size": 532,
		"path": "../public/assets/play-CoS4CEj0.js"
	},
	"/assets/playlists.index-DGFHHuyD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"892-HDWFEJEPFjKVjSmjCIcTKoGPkCE\"",
		"mtime": "2026-09-20T13:29:50.984Z",
		"size": 2194,
		"path": "../public/assets/playlists.index-DGFHHuyD.js"
	},
	"/assets/playlists._playlistId-B1UAlCUv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ed-iKpxq2Vc5dAnRuaQh1k8O1EKsVs\"",
		"mtime": "2026-09-20T13:29:50.980Z",
		"size": 2029,
		"path": "../public/assets/playlists._playlistId-B1UAlCUv.js"
	},
	"/assets/playlists._playlistId-BEsjk5Gt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"310-AGTKsM4ZdN4RlrCMjjq2Yw9WxE8\"",
		"mtime": "2026-09-20T13:29:50.982Z",
		"size": 784,
		"path": "../public/assets/playlists._playlistId-BEsjk5Gt.js"
	},
	"/assets/plus-D51mXbHp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-PZQu7Jqmpwqi1/z+ZiWCbDhsR4U\"",
		"mtime": "2026-09-20T13:29:50.987Z",
		"size": 142,
		"path": "../public/assets/plus-D51mXbHp.js"
	},
	"/assets/recent-D57hkYj0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d-/FoP9WLiuwCn85geMLHosT+RUMM\"",
		"mtime": "2026-09-20T13:29:51.000Z",
		"size": 413,
		"path": "../public/assets/recent-D57hkYj0.js"
	},
	"/assets/routes-BpMawclB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bca-YWKlpoUEYcyMni/pIUkZpQ2kPaI\"",
		"mtime": "2026-09-20T13:29:51.001Z",
		"size": 3018,
		"path": "../public/assets/routes-BpMawclB.js"
	},
	"/assets/preload-helper-CWsbH28F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1866-+dfqHoe6prWMOCJ+uMKpvFi6HpY\"",
		"mtime": "2026-09-20T13:29:50.997Z",
		"size": 6246,
		"path": "../public/assets/preload-helper-CWsbH28F.js"
	},
	"/assets/search-BNp-Nv7o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ff-LPOo9+J5UAHavA1Uos+MaDtMauU\"",
		"mtime": "2026-09-20T13:29:51.003Z",
		"size": 767,
		"path": "../public/assets/search-BNp-Nv7o.js"
	},
	"/assets/search-DW1d-l1N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ef-L1EY+Itm7BU1Lo+GL+O6pdg8ze4\"",
		"mtime": "2026-09-20T13:29:51.004Z",
		"size": 2287,
		"path": "../public/assets/search-DW1d-l1N.js"
	},
	"/assets/songs-Bbnbnq_I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-0b0e06edTNnjnmmrtJE+vZEKwAg\"",
		"mtime": "2026-09-20T13:29:51.008Z",
		"size": 494,
		"path": "../public/assets/songs-Bbnbnq_I.js"
	},
	"/assets/index-lX1FXM7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56198-HJohFPkwB4D3lg/qv6XDcQjiJ8w\"",
		"mtime": "2026-09-20T13:29:50.968Z",
		"size": 352664,
		"path": "../public/assets/index-lX1FXM7y.js"
	},
	"/assets/SongRow-CBYhmETP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1704e-U90VcJb4w9RnZCEXfwOLDcjQQwA\"",
		"mtime": "2026-09-20T13:29:50.973Z",
		"size": 94286,
		"path": "../public/assets/SongRow-CBYhmETP.js"
	},
	"/assets/styles-83uOQWHz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12c20-HAG9VXSMR8GJAkKEGvUBTXIwZ+0\"",
		"mtime": "2026-09-20T13:29:51.014Z",
		"size": 76832,
		"path": "../public/assets/styles-83uOQWHz.css"
	},
	"/covers/kpop.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c5e-+3pt9+cK6vvbouXfHexBesWPUys\"",
		"mtime": "2026-09-20T13:13:36.151Z",
		"size": 15454,
		"path": "../public/covers/kpop.jpg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-09-17T04:36:37.125Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-09-17T04:36:37.114Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/covers/hiphop.jpg": {
		"type": "image/jpeg",
		"etag": "\"16688-mTjckVu/sqboHHXm7oTWvJoSuQ4\"",
		"mtime": "2026-09-20T13:15:11.159Z",
		"size": 91784,
		"path": "../public/covers/hiphop.jpg"
	},
	"/icons/.gitkeep": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
		"mtime": "2026-09-20T10:18:39.600Z",
		"size": 0,
		"path": "../public/icons/.gitkeep"
	},
	"/covers/luxuryvibes.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f1c-69gfoBV7FTf15zDEUQrFvddcmiY\"",
		"mtime": "2026-09-20T13:12:35.160Z",
		"size": 7964,
		"path": "../public/covers/luxuryvibes.jpg"
	},
	"/music/playlist/LuxuryVibes/stereo love x on the floor _ slowed n reverb.mp4": {
		"type": "video/mp4",
		"etag": "\"1-Bn1QlvIZxktTuxx9XjdUKFtWWkc\"",
		"mtime": "2026-09-20T10:57:38.254Z",
		"size": 1,
		"path": "../public/music/playlist/LuxuryVibes/stereo love x on the floor _ slowed n reverb.mp4"
	},
	"/music/playlist/LuxuryVibes/Katy Perry - Harleys In Hawaii (Lyrics) _You and I, Ridin' Harleys in Hawaii.mp4": {
		"type": "video/mp4",
		"etag": "\"4ff44e-UFv7bEONJ0370wuIp6Rcs8mtnvY\"",
		"mtime": "2026-09-20T11:09:20.557Z",
		"size": 5239886,
		"path": "../public/music/playlist/LuxuryVibes/Katy Perry - Harleys In Hawaii (Lyrics) _You and I, Ridin' Harleys in Hawaii.mp4"
	},
	"/music/playlist/LuxuryVibes/bye X Kiss It Better - Rihanna & altare.mp4": {
		"type": "video/mp4",
		"etag": "\"51cbfe-dVwgLJRdOYjrvLXyyINzmsW0F28\"",
		"mtime": "2026-09-20T10:54:48.798Z",
		"size": 5360638,
		"path": "../public/music/playlist/LuxuryVibes/bye X Kiss It Better - Rihanna & altare.mp4"
	},
	"/music/playlist/LuxuryVibes/under the influence x I was never there.mp4": {
		"type": "video/mp4",
		"etag": "\"5d66fa-KZYepTeBOGNb4WBNNMaqqbEUWg4\"",
		"mtime": "2026-09-20T12:57:47.675Z",
		"size": 6121210,
		"path": "../public/music/playlist/LuxuryVibes/under the influence x I was never there.mp4"
	},
	"/music/playlist/LuxuryVibes/Into You X bye (altare remix) - Ariana Grande.mp4": {
		"type": "video/mp4",
		"etag": "\"722dec-MKD8+ZgqMATmzf63Jj9EN5n/5N4\"",
		"mtime": "2026-09-20T10:52:53.538Z",
		"size": 7482860,
		"path": "../public/music/playlist/LuxuryVibes/Into You X bye (altare remix) - Ariana Grande.mp4"
	},
	"/music/playlist/LuxuryVibes/Reed Wonder, Aurora Olivas - The Machine.mp4": {
		"type": "video/mp4",
		"etag": "\"685bc1-dJHrhITuLbKhSa2qh7rJjMvnC1E\"",
		"mtime": "2026-09-20T10:58:33.697Z",
		"size": 6839233,
		"path": "../public/music/playlist/LuxuryVibes/Reed Wonder, Aurora Olivas - The Machine.mp4"
	},
	"/music/playlist/LuxuryVibes/Doja Cat - Agora Hills.mp4": {
		"type": "video/mp4",
		"etag": "\"b07087-YIJkDLTBDrkNaEIHmqsVIhmsL4Q\"",
		"mtime": "2026-09-20T12:28:53.401Z",
		"size": 11563143,
		"path": "../public/music/playlist/LuxuryVibes/Doja Cat - Agora Hills.mp4"
	},
	"/music/playlist/LuxuryVibes/One Of The Girls X Good For You - The Weeknd, JENNIE, Lily-Rose Depp & Selena Gómez.mp4": {
		"type": "video/mp4",
		"etag": "\"bfa02f-ceP91kvuwxOr5jOH/wLPUhf+CbE\"",
		"mtime": "2026-09-20T11:08:40.380Z",
		"size": 12558383,
		"path": "../public/music/playlist/LuxuryVibes/One Of The Girls X Good For You - The Weeknd, JENNIE, Lily-Rose Depp & Selena Gómez.mp4"
	},
	"/music/playlist/LuxuryVibes/The Weeknd - Starboy (feat. Daft Punk).mp4": {
		"type": "video/mp4",
		"etag": "\"c9a17f-HxRGS+SfhEMQTQRb/KKSso7BWYg\"",
		"mtime": "2026-09-20T10:58:48.299Z",
		"size": 13214079,
		"path": "../public/music/playlist/LuxuryVibes/The Weeknd - Starboy (feat. Daft Punk).mp4"
	},
	"/music/playlist/LuxuryVibes/Tinashe - 2 On (Lyrics) ft. SchoolBoy.mp4": {
		"type": "video/mp4",
		"etag": "\"109fd27-vHMaVNKVuiKLWBDE5gLuu0Eslrg\"",
		"mtime": "2026-09-20T11:06:18.722Z",
		"size": 17431847,
		"path": "../public/music/playlist/LuxuryVibes/Tinashe - 2 On (Lyrics) ft. SchoolBoy.mp4"
	},
	"/music/playlist/LuxuryVibes/Kali Uchis - Moonlight (Official Lyric Video.mp4": {
		"type": "video/mp4",
		"etag": "\"123fc65-j047DHYdYHcw9RKIIt/FOQLLQNI\"",
		"mtime": "2026-09-20T13:00:32.223Z",
		"size": 19135589,
		"path": "../public/music/playlist/LuxuryVibes/Kali Uchis - Moonlight (Official Lyric Video.mp4"
	},
	"/music/playlist/LuxuryVibes/JENNIE, Dua Lipa - Handlebars (Official Lyric Video.mp4": {
		"type": "video/mp4",
		"etag": "\"17725ff-/7A6x0VP82wV1NF0K8JAFDBVbgc\"",
		"mtime": "2026-09-20T11:33:04.664Z",
		"size": 24585727,
		"path": "../public/music/playlist/LuxuryVibes/JENNIE, Dua Lipa - Handlebars (Official Lyric Video.mp4"
	},
	"/music/playlist/LuxuryVibes/Rihanna - Kiss It Better (Lyrics).mp4": {
		"type": "video/mp4",
		"etag": "\"168284c-8QxkQ8OYjd/aSy1A+1Ao/+XhZEk\"",
		"mtime": "2026-09-20T11:12:25.559Z",
		"size": 23603276,
		"path": "../public/music/playlist/LuxuryVibes/Rihanna - Kiss It Better (Lyrics).mp4"
	},
	"/music/playlist/LuxuryVibes/Doja Cat x The Weeknd x Lana Del Rey - Streets _ One Of The Girls .mp4": {
		"type": "video/mp4",
		"etag": "\"194d038-n1XHirJSrGQrB4ymqG+OuHhcMG4\"",
		"mtime": "2026-09-20T12:31:17.269Z",
		"size": 26529848,
		"path": "../public/music/playlist/LuxuryVibes/Doja Cat x The Weeknd x Lana Del Rey - Streets _ One Of The Girls .mp4"
	},
	"/music/playlist/LuxuryVibes/Summer Walker & Ciara - Ex Party.mp4": {
		"type": "video/mp4",
		"etag": "\"23600f2-Jxegt7ngykoSFkiHoUauC5NsMBU\"",
		"mtime": "2026-09-20T10:53:57.168Z",
		"size": 37093618,
		"path": "../public/music/playlist/LuxuryVibes/Summer Walker & Ciara - Ex Party.mp4"
	},
	"/music/playlist/LuxuryVibes/Astrid S - Hurts So Good.mp4": {
		"type": "video/mp4",
		"etag": "\"26cabce-5bJfV3iKMEpJzm+QMgaQDqDVnJI\"",
		"mtime": "2026-09-20T11:24:08.100Z",
		"size": 40676302,
		"path": "../public/music/playlist/LuxuryVibes/Astrid S - Hurts So Good.mp4"
	},
	"/music/playlist/LuxuryVibes/JENNIE - Seoul City (Official Video.mp4": {
		"type": "video/mp4",
		"etag": "\"2d46d04-Rg8/FbziasMzc0vNZdhPSibU2gM\"",
		"mtime": "2026-09-20T12:27:07.516Z",
		"size": 47475972,
		"path": "../public/music/playlist/LuxuryVibes/JENNIE - Seoul City (Official Video.mp4"
	},
	"/music/playlist/LuxuryVibes/JENNIE - Less than a Lover (Official Video.mp4": {
		"type": "video/mp4",
		"etag": "\"3406e2d-14qeCISTjbiSvl4Ot5mUGvlqu9Q\"",
		"mtime": "2026-09-20T13:00:12.894Z",
		"size": 54554157,
		"path": "../public/music/playlist/LuxuryVibes/JENNIE - Less than a Lover (Official Video.mp4"
	},
	"/music/playlist/LuxuryVibes/YAD (Яд) ENGLISH VERSION.mp4": {
		"type": "video/mp4",
		"etag": "\"3467281-LKRa2s7HGozVkGPGSPWp3yFqeyI\"",
		"mtime": "2026-09-20T10:58:55.998Z",
		"size": 54948481,
		"path": "../public/music/playlist/LuxuryVibes/YAD (Яд) ENGLISH VERSION.mp4"
	},
	"/music/playlist/LuxuryVibes/Heidi Montag - I'll Do It.mp4": {
		"type": "video/mp4",
		"etag": "\"39b9f56-LBYQALBmclfGMNugPzz9bAhPf0I\"",
		"mtime": "2026-09-20T11:06:58.980Z",
		"size": 60530518,
		"path": "../public/music/playlist/LuxuryVibes/Heidi Montag - I'll Do It.mp4"
	},
	"/music/playlist/LuxuryVibes/ADÉLA - Ain't In LA.mp4": {
		"type": "video/mp4",
		"etag": "\"3c9fb10-qwzxdqN6Uqy0tBTevNOuahWvLH0\"",
		"mtime": "2026-09-20T10:56:15.576Z",
		"size": 63568656,
		"path": "../public/music/playlist/LuxuryVibes/ADÉLA - Ain't In LA.mp4"
	},
	"/music/playlist/LuxuryVibes/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video.mp4": {
		"type": "video/mp4",
		"etag": "\"5f5efa6-a1OhnPTi+j+o15cROSsb3jSQmRA\"",
		"mtime": "2026-09-20T12:28:01.090Z",
		"size": 100003750,
		"path": "../public/music/playlist/LuxuryVibes/Lah Pat  - Rodeo (feat. Flo Milli] [Remix] [Official Lyric Video.mp4"
	},
	"/music/playlist/LuxuryVibes/The Weeknd, Playboi Carti - Timeless (Official Lyric Video.mp4": {
		"type": "video/mp4",
		"etag": "\"61f8308-8xL20Fb3dqK5MFQMfKMXTY2MLbY\"",
		"mtime": "2026-09-20T10:56:16.823Z",
		"size": 102728456,
		"path": "../public/music/playlist/LuxuryVibes/The Weeknd, Playboi Carti - Timeless (Official Lyric Video.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_FELABl = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_FELABl
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
