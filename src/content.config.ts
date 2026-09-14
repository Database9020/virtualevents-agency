import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Optional shorter title for <title>/OG/Twitter and search snippets, for
    // posts whose on-page headline runs long. Leave unset to reuse title.
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Path to an image under src/assets, e.g. "../../assets/blog/my-post.jpg".
    // Leave undefined to fall back to the site default OG image.
    ogImage: z.string().optional(),
    slug: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional overrides for the shared end-of-post CTA (src/components/PostCta.astro).
    // Leave both unset to use the site-wide default heading/note.
    ctaHeading: z.string().optional(),
    ctaNote: z.string().optional(),
  }),
});

export const collections = { blog };
