import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    host: "0.0.0.0",
    hmr: { clientPort: 3001 },
    port: 3001,
    watch: { usePolling: true },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});