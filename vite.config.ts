import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Bump the chunk warning threshold — this site ships pdf generation
    // (jspdf, html2canvas) that inflates the main bundle beyond default limits.
    chunkSizeWarningLimit: 1200,
  },
});
