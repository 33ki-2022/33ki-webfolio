import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date(),
    year: z.number(),
    thumbnail: z.string(),
    youtube: z.array(z.string()).optional(),
    description: z.string().optional(),
    detail: z.string().optional(),
    improvements: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  works,
};
