import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const project = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.object({
      name: z.string(),
      icon: z.string()
    })),
    imagePath: z.string(),
    imageAltText: z.string(),
    gitHubUrl: z.string().url(),
    liveSiteUrl: z.string().url()
  })
});

export const collections = { project }