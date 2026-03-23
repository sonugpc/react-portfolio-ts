import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		shortDescription: z.string(),
		description: z.string(),
		tech: z.array(z.string()),
		image: z.string(),
		liveUrl: z.string(),
		githubUrl: z.string().optional(),
		period: z.string(),
		highlights: z.array(z.string()),
		status: z.enum(['active', 'coming-soon']).optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0)
	})
});

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		author: z.string(),
		featuredImage: z.string(),
		publishedAt: z.string(),
		topic: z.string(),
		readTime: z.string(),
		tags: z.array(z.string()),
		order: z.number().default(0)
	})
});

export const collections = {
	projects: projectsCollection,
	blog: blogCollection
};