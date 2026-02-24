import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tonyguinta.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const articles = getAllArticles()
    .filter((a) => a.status === "published")
    .map((a) => ({
      url: `${baseUrl}/writing/${a.slug}`,
      lastModified: a.date ? new Date(a.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...articles];
}
