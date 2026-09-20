import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Disc3, a as SkipForward, b as House, c as Search, f as Play, g as MicVocal, l as Repeat, m as Music4, n as VolumeX, o as SkipBack, p as Pause, r as Volume2, s as Shuffle, t as X, u as Repeat1, w as Clock, x as Heart, y as ListMusic } from "../_libs/lucide-react.mjs";
import { a as usePlayer, i as formatTime, n as PlayerProvider, r as cn, t as Cover } from "./Cover-LxhhRftw.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$8 } from "./playlists._playlistId-D7wzCBjJ.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as ImportButton } from "./ImportButton-B62BvMse.mjs";
import { t as Route$9 } from "./search-CPaz01hH.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-EFrt-DGr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-83uOQWHz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var nav = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/songs",
		label: "Songs",
		icon: Music4
	},
	{
		to: "/albums",
		label: "Albums",
		icon: Disc3
	},
	{
		to: "/artists",
		label: "Artists",
		icon: MicVocal
	}
];
var lists = [
	{
		to: "/playlists",
		label: "Playlists",
		icon: ListMusic
	},
	{
		to: "/favorites",
		label: "Favorites",
		icon: Heart
	},
	{
		to: "/recent",
		label: "Recently played",
		icon: Clock
	}
];
function Sidebar() {
	const { playlists } = usePlayer();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden w-60 shrink-0 flex-col gap-6 overflow-y-auto border-r border-sidebar-border bg-sidebar px-4 py-6 scroll-slim md:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2 px-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music4, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-semibold",
					children: "Z Music"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				children: nav.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					activeOptions: { exact: to === "/" },
					activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground" },
					className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
				}, to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Your library"
				}), lists.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground" },
					className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
				}, to))]
			}),
			playlists.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Playlists"
				}), playlists.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/playlists/$playlistId",
					params: { playlistId: p.id },
					activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground" },
					className: "truncate rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
					children: p.name
				}, p.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, { className: "mt-auto w-full justify-center" })
		]
	});
}
function Topbar() {
	const navigate = useNavigate();
	const search = useRouterState({ select: (s) => s.location.pathname === "/search" ? s.location.search.q ?? "" : "" });
	const [value, setValue] = (0, import_react.useState)(search);
	(0, import_react.useEffect)(() => setValue(search), [search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex-1 max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				placeholder: "Search songs, artists, albums...",
				onChange: (e) => {
					setValue(e.target.value);
					navigate({
						to: "/search",
						search: { q: e.target.value },
						replace: true
					});
				},
				className: "w-full rounded-full border border-input bg-surface py-2 pl-9 pr-4 text-sm outline-none transition focus:border-primary"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportButton, { className: "hidden sm:inline-flex" })]
	});
}
function PlayerBar() {
	const { currentSong, isPlaying, togglePlay, next, previous, currentTime, duration, seek, volume, setVolume, shuffle, toggleShuffle, repeat, cycleRepeat, toggleFavorite, isFavorite, queue, getSong, playSong, removeFromQueue } = usePlayer();
	const [showQueue, setShowQueue] = (0, import_react.useState)(false);
	const total = duration || currentSong?.duration || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [showQueue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-full right-4 mb-3 max-h-80 w-80 overflow-y-auto rounded-xl border border-border bg-popover p-3 shadow-xl scroll-slim",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Up next"
				}),
				queue.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-1 py-2 text-sm text-muted-foreground",
					children: "Queue is empty."
				}),
				queue.map((id, i) => {
					const song = getSong(id);
					if (!song) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-center gap-2 rounded-lg px-1 py-1.5 hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => playSong(id, queue),
							className: "flex min-w-0 flex-1 items-center gap-2 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
								seed: song.album + song.artist,
								className: "h-8 w-8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm",
									children: song.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: song.artist
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Remove from queue",
							onClick: () => removeFromQueue(i),
							className: "text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}, `${id}-${i}`);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "player-shadow flex items-center gap-4 border-t border-border bg-surface px-4 py-3 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-0 flex-1 items-center gap-3",
					children: currentSong ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
							seed: currentSong.album + currentSong.artist,
							className: "h-12 w-12"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: currentSong.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: [
									currentSong.artist,
									" • ",
									currentSong.album
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Toggle favorite",
							onClick: () => toggleFavorite(currentSong.id),
							className: "hidden text-muted-foreground transition hover:text-primary sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", isFavorite(currentSong.id) && "fill-primary text-primary") })
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Nothing playing yet"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-[1.4] flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Shuffle",
								onClick: toggleShuffle,
								className: cn("text-muted-foreground transition hover:text-foreground", shuffle && "text-primary"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Previous",
								onClick: previous,
								className: "transition hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": isPlaying ? "Pause" : "Play",
								onClick: togglePlay,
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:brightness-110",
								children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Next",
								onClick: next,
								className: "transition hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Repeat",
								onClick: cycleRepeat,
								className: cn("text-muted-foreground transition hover:text-foreground", repeat !== "off" && "text-primary"),
								children: repeat === "one" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-4 w-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden w-full items-center gap-2 sm:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 text-right text-[11px] tabular-nums text-muted-foreground",
								children: formatTime(currentTime)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: total || 1,
								step: .5,
								value: Math.min(currentTime, total),
								"aria-label": "Seek",
								onChange: (e) => seek(Number(e.target.value)),
								className: "h-1 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 text-[11px] tabular-nums text-muted-foreground",
								children: formatTime(total)
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center justify-end gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Queue",
							onClick: () => setShowQueue((v) => !v),
							className: cn("text-muted-foreground transition hover:text-foreground", showQueue && "text-primary"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Mute",
							onClick: () => setVolume(volume > 0 ? 0 : .8),
							className: "text-muted-foreground transition hover:text-foreground",
							children: volume > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 1,
							step: .01,
							value: volume,
							"aria-label": "Volume",
							onChange: (e) => setVolume(Number(e.target.value)),
							className: "hidden h-1 w-24 cursor-pointer appearance-none rounded-full bg-muted accent-primary md:block"
						})
					]
				})
			]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Harmony — Local music player" },
			{
				name: "description",
				content: "A personal music player for the files on your own computer."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PlayerProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-screen flex-col overflow-hidden bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "min-h-0 flex-1 overflow-y-auto px-4 py-6 scroll-slim md:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerBar, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })] })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-Dwi-l4O5.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Z Music — Your local music player" },
		{
			name: "description",
			content: "Play the music files stored on your own computer with playlists, favorites and a queue."
		},
		{
			property: "og:title",
			content: "Z Music — Your local music player"
		},
		{
			property: "og:description",
			content: "Play the music files stored on your own computer with playlists, favorites and a queue."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./albums-DwwHQHpO.mjs");
var Route$5 = createFileRoute("/albums")({
	head: () => ({ meta: [
		{ title: "Albums — Z Music" },
		{
			name: "description",
			content: "Browse your local music collection grouped by album."
		},
		{
			property: "og:title",
			content: "Albums — Z Music"
		},
		{
			property: "og:description",
			content: "Browse your local music collection grouped by album."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./artists-CKvdSUVs.mjs");
var Route$4 = createFileRoute("/artists")({
	head: () => ({ meta: [
		{ title: "Artists — Z Music" },
		{
			name: "description",
			content: "Browse your local music collection grouped by artist."
		},
		{
			property: "og:title",
			content: "Artists — Z Music"
		},
		{
			property: "og:description",
			content: "Browse your local music collection grouped by artist."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./favorites-DN_wRaSF.mjs");
var Route$3 = createFileRoute("/favorites")({
	head: () => ({ meta: [
		{ title: "Favorites — Z Music" },
		{
			name: "description",
			content: "The tracks you marked with a heart in your local music library."
		},
		{
			property: "og:title",
			content: "Favorites — Z Music"
		},
		{
			property: "og:description",
			content: "The tracks you marked with a heart in your local music library."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./recent-DUxbG4qK.mjs");
var Route$2 = createFileRoute("/recent")({
	head: () => ({ meta: [
		{ title: "Recently played — Z Music" },
		{
			name: "description",
			content: "Pick up where you left off with your recently played tracks."
		},
		{
			property: "og:title",
			content: "Recently played — Z Music"
		},
		{
			property: "og:description",
			content: "Pick up where you left off with your recently played tracks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./songs-CihiGkUr.mjs");
var Route$1 = createFileRoute("/songs")({
	head: () => ({ meta: [
		{ title: "All songs — Z Music" },
		{
			name: "description",
			content: "Every track in your local music library, ready to play."
		},
		{
			property: "og:title",
			content: "All songs — Z Music"
		},
		{
			property: "og:description",
			content: "Every track in your local music library, ready to play."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./playlists.index-CVbjxIIU.mjs");
var Route = createFileRoute("/playlists/")({
	head: () => ({ meta: [
		{ title: "Playlists — Z Music" },
		{
			name: "description",
			content: "Create and manage your own playlists from your local music."
		},
		{
			property: "og:title",
			content: "Playlists — Z Music"
		},
		{
			property: "og:description",
			content: "Create and manage your own playlists from your local music."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AlbumsRoute = Route$5.update({
	id: "/albums",
	path: "/albums",
	getParentRoute: () => Route$7
});
var ArtistsRoute = Route$4.update({
	id: "/artists",
	path: "/artists",
	getParentRoute: () => Route$7
});
var FavoritesRoute = Route$3.update({
	id: "/favorites",
	path: "/favorites",
	getParentRoute: () => Route$7
});
var RecentRoute = Route$2.update({
	id: "/recent",
	path: "/recent",
	getParentRoute: () => Route$7
});
var SearchRoute = Route$9.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$7
});
var SongsRoute = Route$1.update({
	id: "/songs",
	path: "/songs",
	getParentRoute: () => Route$7
});
var PlaylistsIndexRoute = Route.update({
	id: "/playlists/",
	path: "/playlists/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AlbumsRoute,
	ArtistsRoute,
	FavoritesRoute,
	RecentRoute,
	SearchRoute,
	SongsRoute,
	PlaylistsPlaylistIdRoute: Route$8.update({
		id: "/playlists/$playlistId",
		path: "/playlists/$playlistId",
		getParentRoute: () => Route$7
	}),
	PlaylistsIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
