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

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        bio: z.string(),
        social: z.object({
            twitter: z.string(),
            github: z.string(),
            website: z.optional(z.string())
        }),
        status: z.string(),
    }),
})

export const collections = {
    'blog': blogCollection,
    'authors': authors,
};