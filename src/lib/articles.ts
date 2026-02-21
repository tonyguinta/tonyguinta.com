export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  status: "published" | "coming-soon";
}

export const articles: Article[] = [
  {
    slug: "content-aggregator-thesis",
    title: "The Advertising Model Is Dying. Here's What Replaces It.",
    subtitle:
      "Why the future of content monetization is a universal pass-through marketplace, and why every platform should want in.",
    date: "2026",
    readTime: "8 min read",
    status: "published",
  },
  {
    slug: "why-i-still-ship-code",
    title: "Why I Still Ship Code as a Director",
    date: "Coming soon",
    readTime: "",
    status: "coming-soon",
  },
  {
    slug: "ai-coding-pilot",
    title: "What Running an AI Coding Pilot Taught Me",
    date: "Coming soon",
    readTime: "",
    status: "coming-soon",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
