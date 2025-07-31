import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
});
=======
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/sw.js',
          dest: ''
        },
        {
          src: 'public/offline.html',
          dest: ''
        },
        {
          src: 'public/manifest.json',
          dest: ''
        }
      ]
    })
  ],
  base: "/",
});
>>>>>>> dev
