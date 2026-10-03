import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The Pages workflow supplies both values. Locally, use the site root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://kobe-vandenberghe.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ filter: (page) => !page.endsWith('/print/') })],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
