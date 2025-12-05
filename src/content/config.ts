import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string(),
        image: z.string().optional(),
        author: z.string().optional(),
        authorImage: z.string().optional(),
        authorRole: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        readingTime: z.string().optional(),
    }),
});

export const collection = {
    blog: blogCollection,
}