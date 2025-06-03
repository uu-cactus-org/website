import { z, defineCollection, type InferEntrySchema } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.optional(z.string().min(1)),
        pubdate: z.date(),
        updated: z.optional(z.date()),
        authors: z.array(z.string()),
        category: z.string(),
        tags: z.array(z.string()),
        coverImage: z.optional(image()),
        draft: z.optional(z.boolean()),
    }),
});
export type BlogSchema = InferEntrySchema<'blog'>;

const authors = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
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
                    icon: z.union([
                        image(),
                        z.string()
                    ])
                }).array().max(3)
            )
        }),
        status: z.string(),
        profileImage: z.union([
            image(),
            z.string()
        ]).optional()
    }),
});
export type AuthorSchema = InferEntrySchema<'authors'>;

export const collections = {
    blog,
    authors,
};