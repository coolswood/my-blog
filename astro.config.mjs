import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), mdx(), prefetch(), critters()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});