import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), robotsTxt(), mdx(), prefetch()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});