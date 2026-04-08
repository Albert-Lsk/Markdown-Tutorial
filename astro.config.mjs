// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Albert-Lsk.github.io/Markdown-Tutorial',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    assets: '_assets'
  }
});
