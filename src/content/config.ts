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
            twitter: z.optional(z.string()),
            github:  z.optional(z.string()),
            website: z.optional(z.string().url()),
            custom: z.optional(
                z.object({
                    label: z.string(),
                    url: z.string().url(),
                    icon: z.string(),
                }).array().max(3)
            )
        }),
        status: z.string(),
        profileImage: z.optional(z.string()).default('/src/assets/logos/cactus/cactakun_noimage.webp'),
    }),
})

export const collections = {
    'blog': blogCollection,
    'authors': authors,
};