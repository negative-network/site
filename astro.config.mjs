import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://negative-network.com',
  // site: 'https://nn-site.test',
  integrations: [tailwind(), sitemap()]
});
