import fs from "fs";

function fixFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [pattern, replacement] of replacements) {
    const regex = new RegExp(pattern, "g");
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Fix __root.jsx
fixFile("src/routes/__root.jsx", [
  [r"function ErrorComponent\(\{ error, reset \}: \{ error: Error; reset: \(\) => void \}\)", "function ErrorComponent({ error, reset })"],
  [r"createRootRouteWithContext<\{ queryClient: QueryClient \}>\\(\\)", "createRootRouteWithContext()"],
  [r"createRootRouteWithContext<\{ queryClient: QueryClient \\}>\\(\\)", "createRootRouteWithContext()"],
  [r"function RootShell\(\{ children \}: \{ children \}\)", "function RootShell({ children })"],
]);

// Fix index.jsx
fixFile("src/routes/index.jsx", [
  [r"function function greeting\(\)", "function greeting()"],
  [r"function function Home\(\)", "function Home()"],
]);

// Fix error-page.js
fixFile("src/lib/error-page.js", [
  [r"export function function renderErrorPage\(\)", "export function renderErrorPage()"],
]);

// Fix ui/sidebar.jsx
fixFile("src/components/ui/sidebar.jsx", [
  [r"function function useSidebar\(\)", "function useSidebar()"],
  [r"open;\n  setOpen: \(open\) => void;\n  openMobile;\n  setOpenMobile: \(open\) => void;\n  isMobile;\n  toggleSidebar: \(\) => void;\n};", "}'],
  [r"React\.forwardRef<[^]*?>\(\(", "React.forwardRef(("],
  [r"useRef<HTMLButtonElement,>", "useRef("],
  [r"useRef<HTMLDivElement>", "useRef("],
  [r"useRef<HTMLInputElement>", "useRef("],
  [r"\}CSSProperties", ""],
  [r": unknown", ""],
  [r"tooltip\?: string \| undefined", "tooltip?"],
  [r"asChild\?;", "asChild?"],
  [r"isActive\?;", "isActive?"],
  [r"showOnHover\?;", "showOnHover?"],
  [r"size\?: \"sm\" \| \"md\";", "size?"],
]);

// Fix carousel and chart
fixFile("src/components/ui/carousel.jsx", [
  [r"function function useCarousel\(\)", "function useCarousel()"],
]);
fixFile("src/components/ui/chart.jsx", [
  [r"function function useChart\(\)", "function useChart()"],
]);

// Fix SongRow.jsx
fixFile("src/components/SongRow.jsx", [
  [r"song: Song;", ""],
  [r"index;", "index;"],
  [r"list\[\];", "list;"],
  [r"onRemoveFromPlaylist\?: \(\) => void;", "onRemoveFromPlaylist?;"],
  [r"songs: Song\[\];", "songs;"],
  [r"onRemoveFromPlaylist\?: \(id\) => void;", "onRemoveFromPlaylist?;"],
]);

// Fix VideoStage.jsx
fixFile("src/components/VideoStage.jsx", [
  [r"export function function VideoStage\(\)", "export function VideoStage()"],
  [r"\(e: React\.PointerEvent\)", "(e)"],
  [r" as HTMLElement", ""],
]);

// Fix Cover.jsx
fixFile("src/components/Cover.jsx", [
  [r"imageUrl\? \| undefined", "imageUrl?"],
]);

// Fix PageHeader.jsx
fixFile("src/components/PageHeader.jsx", [
  [r"subtitle\?;", "subtitle?;"],
  [r"action\?;", "action?;"],
  [r"message;", "message;"],
]);

// Fix ImportButton.jsx
fixFile("src/components/ImportButton.jsx", [
  [r"className\?; label\?", "className?; label?"],
]);

// Fix Topbar.jsx
fixFile("src/components/Topbar.jsx", [
  [r"export function function Topbar\(\)", "export function Topbar()"],
]);

// Fix use-mobile.jsx
fixFile("src/hooks/use-mobile.jsx", [
  [r"export function function useIsMobile\(\)", "export function useIsMobile()"],
  [r"React\.useState<boolean \| undefined>\(undefined\)", "React.useState(undefined)"],
]);

// Fix command.jsx - DialogProps reference
fixFile("src/components/ui/command.jsx", [
  [r"const CommandDialog = \(\{ children, \.\.\.props \}: DialogProps\)", "const CommandDialog = ({ children, ...props })"],
]);

// Fix sonner.jsx - ToasterProps
fixFile("src/components/ui/sonner.jsx", [
  [r"const Toaster = \(\{ \.\.\.props \}: ToasterProps\)", "const Toaster = ({ ...props })"],
]);

// Fix dialog.jsx - remaining forwardRef patterns
fixFile("src/components/ui/dialog.jsx", [
  [r"React\.forwardRef<[^]*?>\(\(", "React.forwardRef(("],
  [r"\(\}: \)", "({"])  // Fix DialogHeader/Footer
]);

console.log("Done with remaining fixes!");
