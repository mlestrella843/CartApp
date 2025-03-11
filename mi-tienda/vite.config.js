import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", 
  server: {
    port: 3000, 
  },
  build: {
    outDir: "dist", 
    sourcemap: true, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; 
          }
        },
      },
    },
  },
});
