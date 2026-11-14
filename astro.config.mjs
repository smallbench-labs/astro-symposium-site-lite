// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set this to the URL the site will live at.
  site: 'https://cmhd2027.example.org',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
