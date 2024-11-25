import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  compressHTML: true,
  site: 'https://studiowxy.com',
  output: 'static',


  integrations: [react(), tailwind()]
});