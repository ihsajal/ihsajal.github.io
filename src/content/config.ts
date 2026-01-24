import { defineCollection, z } from "astro:content";

const statblog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // This is the date YOU specify; the index will sort by this.
    date: z.coerce.date(),
    // Optional thin thumbnail image path you control
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { statblog };
