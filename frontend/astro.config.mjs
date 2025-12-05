// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()]
  },
});