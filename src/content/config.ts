import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
    title: z.string(),
    pubdate: z.date(),
    updated: z.optional(z.date()),
    authors: z.array(z.string()),
    category: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string(),
    draft: z.boolean(),
});
export type BlogSchema = z.infer<typeof blogSchema>;

const authorSchema = z.object({
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
});
export type AuthorSchema = z.infer<typeof authorSchema>;

export const collections = {
    'blog': defineCollection({
        type: 'content',
        schema: blogSchema,
    }),

    'authors': defineCollection({
        type: 'data',
        schema: authorSchema,
    }),
};