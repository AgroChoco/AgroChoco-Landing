import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    category: z.string().default("Artículo técnico"),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    category: z.string().default("Servicio técnico"),
    icon: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number().optional(),
    duration: z.string().optional(),
    specifications: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status: z.enum(["active", "draft", "archived"]).default("active"),
  }),
});

export const collections = {
  articles,
  services,
};
