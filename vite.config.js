import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // Puedes especificar los algoritmos de compresión
      algorithm: "brotliCompress", // O 'gzip'
      ext: ".br", // O '.gz' si usas gzip
      threshold: 10240, // Comprimir archivos mayores a 10KB
    }),
  ],
});
