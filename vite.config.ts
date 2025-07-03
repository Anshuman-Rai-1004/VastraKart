import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Removed componentTagger() from lovable-tagger
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/frontend": path.resolve(__dirname, "./src/frontend"),
      "@/backend": path.resolve(__dirname, "./src/backend"),
    },
  },
}));
