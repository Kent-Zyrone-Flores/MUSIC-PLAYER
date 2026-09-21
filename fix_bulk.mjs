import fs from "fs";
import path from "path";

const srcDir = "./src";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;
  
  // 1. Fix "function function" -> "function"
  content = content.replace(/function function /g, "function ");
  content = content.replace(/export function function /g, "export function ");
  
  // 2. Fix "const parts[] = []" -> "const parts = []"
  content = content.replace(/const parts\[\] = \[\]/g, "const parts = []");
  
  // 3. Fix React.useState<boolean | undefined>(undefined)
  content = content.replace(/React\.useState<boolean \| undefined>\(undefined\)/g, "React.useState(undefined)");
  
  // 4. Remove "as const"
  content = content.replace(/ as const/g, "");
  
  // 5. Fix useRef type parameters
  content = content.replace(/useRef<HTMLVideoElement \| null>\(null\)/g, "useRef(null)");
  content = content.replace(/useRef<HTMLDivElement \| null>\(null\)/g, "useRef(null)");
  
  // 6. Remove "use client" directives
  content = content.replace(/"use client"\n?/g, "");
  content = content.replace(/'use client'\n?/g, "");
  
  // 7. Fix "e: React.PointerEvent" -> "e"
  content = content.replace(/e: React\.PointerEvent/g, "e");
  
  // 8. Remove "as HTMLElement"
  content = content.replace(/ as HTMLElement/g, "");
  
  // 9. Fix React.forwardRef type params - remove type parameters
  content = content.replace(/React\.forwardRef<[^]*?>(\()/g, "React.forwardRef($1");
  
  // 10. Fix useRef<HTMLButtonElement,> -> useRef(
  content = content.replace(/useRef<HTMLButtonElement,>/g, "useRef(");
  content = content.replace(/useRef<HTMLInputElement>/g, "useRef(");
  
  // 11. Fix remaining React.forwardRef patterns
  content = content.replace(/React\.forwardRef<[^,]*,\s*\n\s*[^>]*>\s*\(/g, "React.forwardRef(");
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      fixFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log("Done with bulk regex fixes!");
