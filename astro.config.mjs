import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
export default defineConfig({
  output: 'server',

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sae203-2026.lola-brouart.fr"
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify({
    imageCDN: false,
  }),
});