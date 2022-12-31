import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from 'astro-robots-txt';
import astroI18next from "astro-i18next";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), robotsTxt(), mdx(), prefetch(), astroI18next()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});