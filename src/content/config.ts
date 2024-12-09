import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubdate: z.date(),
        authors: z.array(z.string()),
        categories: z.string(),
        tags: z.array(z.string()),
        coverImage: z.string(),
        draft: z.boolean(),
    }),
});

export const collections = {
    'blog': blogCollection,
};