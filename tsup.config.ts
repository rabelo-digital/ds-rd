import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".css": "local-css",
      ".module.css": "local-css",
    };
  },
});
