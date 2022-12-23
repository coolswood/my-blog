import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), mdx(), prefetch(), partytown({
    config: { 
      forward: ["dataLayer.push"] 
    },
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});