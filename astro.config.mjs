import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// import { z, defineCollection } from 'astro:content';

// // 2. Define a `type` and `schema` for each collection
// const solutionsCollection = defineCollection({
//   type: 'data', // v2.5.0 and later
//   schema: z.object({
//     name: z.string(),
//     logo: z.string(),
//     url: z.string(),
//   }),
// });

// // 3. Export a single `collections` object to register your collection(s)
// export const collections = {
//   'solutions': solutionsCollection,
// };

// import { Image } from 'astro:assets';
// export const images = {
//   'logos': import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/logos/*.{jpeg,jpg,png,gif,svg}'),
// };

export default defineConfig({
  site: 'https://negative-network.com',
  integrations: [tailwind(), sitemap()]
});
