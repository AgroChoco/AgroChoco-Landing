// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [
        {
            name: 'Roboto',
            cssVariable: '--font-roboto',
            provider: fontProviders.google(),
            weights: [400],
            styles: ["normal", "italic"],
            subsets: ["latin"],
            fallbacks: ["sans-serif"],
            formats: ["woff2"],
        },
    ],
});
