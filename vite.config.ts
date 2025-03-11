import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import tsConfigPaths from "vite-tsconfig-paths";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [crx({ manifest }), tsConfigPaths()],
});
