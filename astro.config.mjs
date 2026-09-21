// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://staffanmowitz.dev",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Silkscreen",
      cssVariable: "--font-silkscreen",
      weights: [400],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
