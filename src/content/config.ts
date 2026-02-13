import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date(),
    year: z.number(),
    thumbnail: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
  }),
});

export const collections = {
  works,
};
