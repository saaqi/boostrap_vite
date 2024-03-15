import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
  ],
  base: "./",
  server: {
    port: 3000,
  },
  build: {
    outDir: "./docs",
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
