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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-09-17T04:36:37.114Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-09-17T04:36:37.125Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/images/zlogo.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ac5-XTFZ7qZZnF5BBs4QfRcWrThXvO4\"",
		"mtime": "2026-09-20T13:35:56.125Z",
		"size": 27333,
		"path": "../public/images/zlogo.jpg"
	},
	"/assets/albums-3RenvXIn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38d-w+24XiqopZC6VCKm4Urp6PC5n24\"",
		"mtime": "2026-09-20T15:19:13.050Z",
		"size": 909,
		"path": "../public/assets/albums-3RenvXIn.js"
	},
	"/icons/.gitkeep": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
		"mtime": "2026-09-20T10:18:39.600Z",
		"size": 0,
		"path": "../public/icons/.gitkeep"
	},
	"/covers/ai.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e884-gm/HGLecD7Q3A8zkoCuinv7eIRM\"",
		"mtime": "2026-09-20T13:55:38.712Z",
		"size": 125060,
		"path": "../public/covers/ai.jpg"
	},
	"/covers/hiphop.jpg": {
		"type": "image/jpeg",
		"etag": "\"16688-mTjckVu/sqboHHXm7oTWvJoSuQ4\"",
		"mtime": "2026-09-20T13:15:11.159Z",
		"size": 91784,
		"path": "../public/covers/hiphop.jpg"
	},
	"/assets/artists-B93xFii9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39e-iL56iJ2sp5UJnh4jrbmlfNLj/84\"",
		"mtime": "2026-09-20T15:19:13.051Z",
		"size": 926,
		"path": "../public/assets/artists-B93xFii9.js"
	},
	"/assets/favorites-DIpS_VoM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cc-e5qe5wiXfKWkDZIuJiMQtzu6/fY\"",
		"mtime": "2026-09-20T15:19:13.052Z",
		"size": 460,
		"path": "../public/assets/favorites-DIpS_VoM.js"
	},
	"/assets/dist-DN-LCTgV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82ee-7+17587yctYM0v+yFm3sY97nnSI\"",
		"mtime": "2026-09-20T15:19:13.051Z",
		"size": 33518,
		"path": "../public/assets/dist-DN-LCTgV.js"
	},
	"/covers/kpop.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c5e-+3pt9+cK6vvbouXfHexBesWPUys\"",
		"mtime": "2026-09-20T13:13:36.151Z",
		"size": 15454,
		"path": "../public/covers/kpop.jpg"
	},
	"/assets/ImportButton-Cv2mU3ur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"471-C5XCUx+L7bz/l91rpm3cQNjviJM\"",
		"mtime": "2026-09-20T15:19:13.045Z",
		"size": 1137,
		"path": "../public/assets/ImportButton-Cv2mU3ur.js"
	},
	"/assets/link-DklkTnt1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b26-bHBk0yAXst/IUtp4Nmi2+q3EbZ4\"",
		"mtime": "2026-09-20T15:19:13.052Z",
		"size": 23334,
		"path": "../public/assets/link-DklkTnt1.js"
	},
	"/assets/play-zKXbR9yQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-DrPAB91pU6CrqnsIR3HkwJL+QAY\"",
		"mtime": "2026-09-20T15:19:13.053Z",
		"size": 540,
		"path": "../public/assets/play-zKXbR9yQ.js"
	},
	"/assets/PageHeader-CcLPvDAF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5-vwwT1g87Kz4Xjn72aQ2zhDVUtHI\"",
		"mtime": "2026-09-20T15:19:13.048Z",
		"size": 693,
		"path": "../public/assets/PageHeader-CcLPvDAF.js"
	},
	"/assets/playlists.index-BYeHx_BF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"890-JU+PMey3J2pbqpag3RHx9FpVLbw\"",
		"mtime": "2026-09-20T15:19:13.055Z",
		"size": 2192,
		"path": "../public/assets/playlists.index-BYeHx_BF.js"
	},
	"/assets/playlists._playlistId-BcA0GPMZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f5-ID4SELu5A44sl7NRhYWAQ4EsDVc\"",
		"mtime": "2026-09-20T15:19:13.053Z",
		"size": 2037,
		"path": "../public/assets/playlists._playlistId-BcA0GPMZ.js"
	},
	"/assets/index-DY2-0U6V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56edc-+aMfaNsaR3Y0z9xOT5x/oPvpcKE\"",
		"mtime": "2026-09-20T15:19:13.045Z",
		"size": 356060,
		"path": "../public/assets/index-DY2-0U6V.js"
	},
	"/assets/playlists._playlistId-CrLykzxR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"318-/A/5DHci3mQf+BBGpb26NZrYB1Y\"",
		"mtime": "2026-09-20T15:19:13.055Z",
		"size": 792,
		"path": "../public/assets/playlists._playlistId-CrLykzxR.js"
	},
	"/assets/plus-Dg7OnWMV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-dRFBmu46ODo06LtvJ9byJq1xRWY\"",
		"mtime": "2026-09-20T15:19:13.056Z",
		"size": 150,
		"path": "../public/assets/plus-Dg7OnWMV.js"
	},
	"/assets/preload-helper-L5J6V32X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"186e-RE8IQw1h/WakvHx27nA5MJt8qso\"",
		"mtime": "2026-09-20T15:19:13.056Z",
		"size": 6254,
		"path": "../public/assets/preload-helper-L5J6V32X.js"
	},
	"/covers/luxuryvibes.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f1c-69gfoBV7FTf15zDEUQrFvddcmiY\"",
		"mtime": "2026-09-20T13:12:35.160Z",
		"size": 7964,
		"path": "../public/covers/luxuryvibes.jpg"
	},
	"/assets/recent-Cq07rG34.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5-zjnF8J9MnUNNBUwVhMRU2tYrR5w\"",
		"mtime": "2026-09-20T15:19:13.057Z",
		"size": 421,
		"path": "../public/assets/recent-Cq07rG34.js"
	},
	"/assets/routes-FQ_lL8zk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc8-uZqASbWFwE0s730oEvsg6CtNpPw\"",
		"mtime": "2026-09-20T15:19:13.059Z",
		"size": 3016,
		"path": "../public/assets/routes-FQ_lL8zk.js"
	},
	"/assets/PlayerContext-BK3HHl2i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d32e-raQ+dNjD0cSQ4XF27GMSrIAbXEQ\"",
		"mtime": "2026-09-20T15:19:13.049Z",
		"size": 54062,
		"path": "../public/assets/PlayerContext-BK3HHl2i.js"
	},
	"/assets/search-CZD8PYgm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f7-cj9BHwCUlLkv1FFeRUC7JMfxgb4\"",
		"mtime": "2026-09-20T15:19:13.059Z",
		"size": 2295,
		"path": "../public/assets/search-CZD8PYgm.js"
	},
	"/assets/search-DpYyY6ej.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-YdkOubSBc2TaW8OuWU2aGPy2nUE\"",
		"mtime": "2026-09-20T15:19:13.060Z",
		"size": 775,
		"path": "../public/assets/search-DpYyY6ej.js"
	},
	"/assets/songs-CARj7Yio.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f6-8OB8LkE3dwNu0Ti1RH7BiKnKHrs\"",
		"mtime": "2026-09-20T15:19:13.061Z",
		"size": 502,
		"path": "../public/assets/songs-CARj7Yio.js"
	},
	"/assets/styles-D2z2Jve_.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12d91-YIJVOpmZxFzJhBInXw1nt+eWxaE\"",
		"mtime": "2026-09-20T15:19:13.061Z",
		"size": 77201,
		"path": "../public/assets/styles-D2z2Jve_.css"
	},
	"/assets/SongRow-CNBiUepF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17056-9W20bUpvxHFUHO/2FjVadAr5Dtg\"",
		"mtime": "2026-09-20T15:19:13.049Z",
		"size": 94294,
		"path": "../public/assets/SongRow-CNBiUepF.js"
	},
	"/music/playlist/AI/Owl City & Carly Rae Jepsen - Good Time.mp3": {
		"type": "audio/mpeg",
		"etag": "\"311394-tC0P+SSXCF7UC5VnOFMPkFSGL1E\"",
		"mtime": "2026-05-23T12:25:43.188Z",
		"size": 3216276,
		"path": "../public/music/playlist/AI/Owl City & Carly Rae Jepsen - Good Time.mp3"
	},
	"/music/playlist/AI/Renegade Stories - Cool Off (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"538dec-Y57q5vjOU9gS+ay9jycSUCkXaeg\"",
		"mtime": "2025-09-22T06:00:25.555Z",
		"size": 5475820,
		"path": "../public/music/playlist/AI/Renegade Stories - Cool Off (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Kahel Na Langit (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5794f1-H3BpFwxw+PQPMnLnp88brLLg4hA\"",
		"mtime": "2025-09-19T09:39:41.541Z",
		"size": 5739761,
		"path": "../public/music/playlist/AI/Renegade Stories - Kahel Na Langit (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Naiilang (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"55c616-06nyhYW5rbnfK1g+rQ7wuAZUq3c\"",
		"mtime": "2025-09-22T06:04:25.991Z",
		"size": 5621270,
		"path": "../public/music/playlist/AI/Renegade Stories - Naiilang (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - MULI (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5e895a-WNGmdz6WysREz+50E0ED/Kpk5us\"",
		"mtime": "2025-09-19T09:40:01.306Z",
		"size": 6195546,
		"path": "../public/music/playlist/AI/Renegade Stories - MULI (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Oksihina (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5b43cd-il4fukkPr2Bn2jczmufzXWp+hw0\"",
		"mtime": "2025-09-22T06:01:00.444Z",
		"size": 5981133,
		"path": "../public/music/playlist/AI/Renegade Stories - Oksihina (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Synesthesia (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5d749e-n1QocF9lzk3Nz0g+uYXdG5PAXFA\"",
		"mtime": "2025-09-19T09:40:21.105Z",
		"size": 6124702,
		"path": "../public/music/playlist/AI/Renegade Stories - Synesthesia (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Sagada (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5eeb4f-dZH0BssGotLH/QoHkvGy7s87apo\"",
		"mtime": "2025-09-22T05:59:43.969Z",
		"size": 6220623,
		"path": "../public/music/playlist/AI/Renegade Stories - Sagada (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Sa Susunod Na Habang Buhay (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5e895a-Umurby5LItMcaZTGo74/pIhA/BU\"",
		"mtime": "2025-09-19T09:41:22.799Z",
		"size": 6195546,
		"path": "../public/music/playlist/AI/Renegade Stories - Sa Susunod Na Habang Buhay (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Byahe (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"60bf10-jZ/g5i6z2C0ry5Xuvm3UyPKxxCQ\"",
		"mtime": "2025-09-22T06:00:05.799Z",
		"size": 6340368,
		"path": "../public/music/playlist/AI/Renegade Stories - Byahe (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - MULTO (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"66fbcd-cxqZ3gTUvEXSHI+Qoj5OuuGdsQY\"",
		"mtime": "2025-09-19T09:39:16.334Z",
		"size": 6749133,
		"path": "../public/music/playlist/AI/Renegade Stories - MULTO (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Burnout (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"698e93-ow/UNe+sxOo00Jwx0IH1lfjeWik\"",
		"mtime": "2025-09-22T06:01:49.423Z",
		"size": 6917779,
		"path": "../public/music/playlist/AI/Renegade Stories - Burnout (Rock Cover).mp3"
	},
	"/music/playlist/AI/Hale - Blue Sky (Official Lyric Video).mp3": {
		"type": "audio/mpeg",
		"etag": "\"69a49e-n+re5IWUd51Wm0qd11rgEK4ind0\"",
		"mtime": "2026-05-23T10:59:43.420Z",
		"size": 6923422,
		"path": "../public/music/playlist/AI/Hale - Blue Sky (Official Lyric Video).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Bawat Daan (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"6d9325-KlJO6xdA/lVqZ22/hHD93NkNQsQ\"",
		"mtime": "2025-09-22T05:55:28.919Z",
		"size": 7181093,
		"path": "../public/music/playlist/AI/Renegade Stories - Bawat Daan (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Oks Lang (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"6bb80b-bfZ4GMku5Q6h8FoiVEpiBfPMrNY\"",
		"mtime": "2025-09-22T06:01:15.477Z",
		"size": 7059467,
		"path": "../public/music/playlist/AI/Renegade Stories - Oks Lang (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - OO (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"6b02d2-N44KHzejdw9Qxut/wKO99Gkq3u0\"",
		"mtime": "2025-09-22T05:59:28.693Z",
		"size": 7013074,
		"path": "../public/music/playlist/AI/Renegade Stories - OO (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Your Song (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5620b2-AfMu74tsFNTlfMVjTWw2VIAOIOo\"",
		"mtime": "2025-09-19T09:41:05.812Z",
		"size": 5644466,
		"path": "../public/music/playlist/AI/Renegade Stories - Your Song (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Nandito Ako (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"751a7e-0hoqXICTFLyi2EucMvZTyqqCBfc\"",
		"mtime": "2025-09-19T09:38:28.255Z",
		"size": 7674494,
		"path": "../public/music/playlist/AI/Renegade Stories - Nandito Ako (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Pahina (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"742598-UBzUtMUKawHerxIujCv2b+GTLeE\"",
		"mtime": "2025-09-19T09:38:09.715Z",
		"size": 7611800,
		"path": "../public/music/playlist/AI/Renegade Stories - Pahina (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Tunay (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"5e3130-5oQqvFboXMcSBun5+WQ0QKLUwYE\"",
		"mtime": "2025-09-22T06:00:44.096Z",
		"size": 6172976,
		"path": "../public/music/playlist/AI/Renegade Stories - Tunay (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Ikaw Lang Patutunguhan (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"7a5fe1-IpZ6Eo4dV6vZ3zDNaN9Ua8XLlnk\"",
		"mtime": "2025-09-19T09:40:58.167Z",
		"size": 8019937,
		"path": "../public/music/playlist/AI/Renegade Stories - Ikaw Lang Patutunguhan (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Sa Bawat Sandali (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"7b1a01-t2rFPYta5/v7rNRekM7yRwQ1CK0\"",
		"mtime": "2025-09-19T09:38:44.760Z",
		"size": 8067585,
		"path": "../public/music/playlist/AI/Renegade Stories - Sa Bawat Sandali (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Tadhana (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"646906-se0GFs5bewY7jkX6/86PagdW5OY\"",
		"mtime": "2025-09-22T06:02:16.981Z",
		"size": 6580486,
		"path": "../public/music/playlist/AI/Renegade Stories - Tadhana (Rock Cover).mp3"
	},
	"/music/playlist/AI/Renegade Stories - Umaasa Lang Sayo (Rock Cover).mp3": {
		"type": "audio/mpeg",
		"etag": "\"668d98-+xFvTCpsdq/+tHTqQe43M/wezUc\"",
		"mtime": "2025-09-22T05:58:29.410Z",
		"size": 6720920,
		"path": "../public/music/playlist/AI/Renegade Stories - Umaasa Lang Sayo (Rock Cover).mp3"
	},
	"/music/playlist/LuxuryVibes/stereo love x on the floor _ slowed n reverb.mp4": {
		"type": "video/mp4",
		"etag": "\"1-Bn1QlvIZxktTuxx9XjdUKFtWWkc\"",
		"mtime": "2026-09-20T10:57:38.254Z",
		"size": 1,
		"path": "../public/music/playlist/LuxuryVibes/stereo love x on the floor _ slowed n reverb.mp4"
	},
	"/music/playlist/LuxuryVibes/bye X Kiss It Better - Rihanna & altare.mp4": {
		"type": "video/mp4",
		"etag": "\"51cbfe-dVwgLJRdOYjrvLXyyINzmsW0F28\"",
		"mtime": "2026-09-20T10:54:48.798Z",
		"size": 5360638,
		"path": "../public/music/playlist/LuxuryVibes/bye X Kiss It Better - Rihanna & altare.mp4"
	},
	"/music/playlist/LuxuryVibes/Katy Perry - Harleys In Hawaii (Lyrics) _You and I, Ridin' Harleys in Hawaii.mp4": {
		"type": "video/mp4",
		"etag": "\"4ff44e-UFv7bEONJ0370wuIp6Rcs8mtnvY\"",
		"mtime": "2026-09-20T11:09:20.557Z",
		"size": 5239886,
		"path": "../public/music/playlist/LuxuryVibes/Katy Perry - Harleys In Hawaii (Lyrics) _You and I, Ridin' Harleys in Hawaii.mp4"
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
	"/music/playlist/LuxuryVibes/under the influence x I was never there.mp4": {
		"type": "video/mp4",
		"etag": "\"5d66fa-KZYepTeBOGNb4WBNNMaqqbEUWg4\"",
		"mtime": "2026-09-20T12:57:47.675Z",
		"size": 6121210,
		"path": "../public/music/playlist/LuxuryVibes/under the influence x I was never there.mp4"
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
	"/music/playlist/LuxuryVibes/ADÉLA - Ain't In LA.mp4": {
		"type": "video/mp4",
		"etag": "\"3c9fb10-qwzxdqN6Uqy0tBTevNOuahWvLH0\"",
		"mtime": "2026-09-20T10:56:15.576Z",
		"size": 63568656,
		"path": "../public/music/playlist/LuxuryVibes/ADÉLA - Ain't In LA.mp4"
	},
	"/music/playlist/LuxuryVibes/Heidi Montag - I'll Do It.mp4": {
		"type": "video/mp4",
		"etag": "\"39b9f56-LBYQALBmclfGMNugPzz9bAhPf0I\"",
		"mtime": "2026-09-20T11:06:58.980Z",
		"size": 60530518,
		"path": "../public/music/playlist/LuxuryVibes/Heidi Montag - I'll Do It.mp4"
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
