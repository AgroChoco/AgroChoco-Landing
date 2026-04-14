import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import type { IconName } from "@data/icons";
import { getServiceImage } from "@data/service-images";

type HeadingLike = {
    depth: number;
    slug: string;
    text: string;
};

const READING_WORDS_PER_MINUTE = 180;

export function getContentSlug(id: string): string {
    return id.replace(/\.md$/, "");
}

export function getTocItems(
    headings: readonly HeadingLike[],
    depth = 2,
): HeadingLike[] {
    return headings.filter((heading) => heading.depth === depth);
}

export function hasItems(items: readonly unknown[]): boolean {
    return items.length > 0;
}

export function estimateReadingMinutes(content: string): number {
    const words = content.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / READING_WORDS_PER_MINUTE));
}

export function getRelatedArticles(
    allArticles: CollectionEntry<"articles">[],
    currentArticle: CollectionEntry<"articles">,
    limit = 3,
): CollectionEntry<"articles">[] {
    return allArticles
        .filter((item) => item.id !== currentArticle.id)
        .filter((item) => item.data.category === currentArticle.data.category)
        .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999))
        .slice(0, limit);
}

export interface ServiceCardData {
    slug: string;
    icon: IconName;
    title: string;
    image: ImageMetadata;
    description: string;
    href: string;
}

export async function getActiveServiceCards(): Promise<ServiceCardData[]> {
    const services = (
        await getCollection("services", ({ data }) => data.status === "active")
    ).sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));

    return services.map((service) => {
        const slug = getContentSlug(service.id);

        return {
            slug,
            icon: service.data.icon as IconName,
            title: service.data.title,
            image: getServiceImage(slug),
            description: service.data.description,
            href: `/services/${slug}`,
        };
    });
}
