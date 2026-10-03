import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const activity = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/activity' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.iso.date(),
    type: z.enum(['development', 'event', 'hackathon', 'podcast', 'reflection']),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    schoolRequired: z.boolean().default(false),
    hero: z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }).optional(),
  }),
});

export const collections = { activity };
