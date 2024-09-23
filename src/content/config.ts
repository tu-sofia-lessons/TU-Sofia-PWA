import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      description: z.string(),
      thumbnail: image()
    })
});

export const collections = { blog };
