// @ts-nocheck

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sanity from "@sanity/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "8ajn3uhd",
      dataset: "production",
      // useCdn: false, // for static builds
    }),
    react(),],

  adapter: cloudflare(),
})