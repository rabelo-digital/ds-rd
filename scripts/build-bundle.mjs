/**
 * Bundles the component library with esbuild local-css so CSS module class names
 * are scoped per component (e.g. Button_button) and do not collide globally.
 */
import * as esbuild from "esbuild";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "@radix-ui/react-accordion",
  "@radix-ui/react-checkbox",
  "@radix-ui/react-dialog",
  "@radix-ui/react-radio-group",
  "@radix-ui/react-select",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toast",
  "@radix-ui/react-tooltip",
  "react-icons",
];

async function bundle(entry, outfile, format) {
  await esbuild.build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format,
    platform: "neutral",
    target: "es2020",
    sourcemap: true,
    external,
    loader: {
      ".css": "local-css",
    },
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  });
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

await Promise.all([
  bundle(resolve(root, "src/index.ts"), resolve(dist, "index.mjs"), "esm"),
  bundle(resolve(root, "src/index.ts"), resolve(dist, "index.js"), "cjs"),
  bundle(resolve(root, "src/tokens/index.ts"), resolve(dist, "tokens/index.mjs"), "esm"),
  bundle(resolve(root, "src/tokens/index.ts"), resolve(dist, "tokens/index.js"), "cjs"),
]);

// esbuild emits CSS next to JS — merge component CSS into index.css
const indexCssPath = resolve(dist, "index.css");
const tokensCssPath = resolve(dist, "tokens/index.css");

try {
  cpSync(indexCssPath, resolve(dist, "styles.css"));
} catch {
  console.warn("[build:bundle] no index.css emitted");
}

console.log("[build:bundle] esbuild bundles written to dist/");
