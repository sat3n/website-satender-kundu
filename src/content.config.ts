import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/thoughts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: file("./src/data/books.yaml"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(["read", "reading", "to-read"]),
    year: z.number().optional(),
    rating: z.number().min(1).max(5).optional(),
    category: z.string().optional(),
    link: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: file("./src/data/articles.yaml"),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string().url(),
    category: z.string().optional(),
    note: z.string().optional(),
  }),
});

const certifications = defineCollection({
  loader: file("./src/data/certifications.yaml"),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    expiryDate: z.coerce.date().optional(),
    credentialUrl: z.string().url().optional(),
    category: z.string().optional(),
  }),
});

const community = defineCollection({
  loader: file("./src/data/community.yaml"),
  schema: z.object({
    organization: z.string(),
    role: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    url: z.string().url().optional(),
    type: z.enum(["non-profit", "open-source", "mentoring", "volunteering"]),
  }),
});

export const collections = { thoughts, books, articles, certifications, community };
