// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.agrochoco.com",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      // Headings & Titles
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta",
      provider: fontProviders.google(),
      weights: [600, 800], // Semibold y ExtraBold
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      // Body & Data
      name: "Outfit",
      cssVariable: "--font-outfit",
      provider: fontProviders.google(),
      weights: [300, 500], // Light y Medium
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
});
