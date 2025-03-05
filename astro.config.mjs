import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://andressamfr.github.io',
  base: 'andressamfr.github.io',
});