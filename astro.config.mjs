import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Update this to the live domain before deploying so the sitemap and
// canonical URLs are correct.
export const SITE_URL = 'https://virtualevents.agency';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
});
