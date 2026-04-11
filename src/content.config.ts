import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const articles = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        excerpt: z.string().optional(),
        category: z.string().default("Articulo tecnico"),
        heroImage: z.string().optional(),
        heroAlt: z.string().optional(),
        order: z.number().optional(),
    }),
});

export const collections = {
    articles,
};
