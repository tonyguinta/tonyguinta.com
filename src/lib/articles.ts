import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  status: "published" | "coming-soon" | "draft";
  content?: string;
}

const contentDir = path.join(process.cwd(), "content");

const comingSoonArticles: Article[] = [
  {
    slug: "why-i-still-ship-code",
    title: "Why I Still Ship Code as a Director",
    date: "Coming soon",
    readTime: "",
    status: "coming-soon",
  },
  {
    slug: "you-dont-need-to-know-how",
    title: "You Don't Need to Know How. You Need to Know What.",
    date: "Coming soon",
    readTime: "",
    status: "coming-soon",
  },
];

function getMarkdownArticles(): Article[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const articles: Article[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);

    if (!data.slug || !data.title || !data.status) continue;
    if (data.status === "draft") continue;

    articles.push({
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      readTime: data.readTime || "",
      status: data.status,
      content,
    });
  }

  return articles;
}

export function getAllArticles(): Article[] {
  const published = getMarkdownArticles().sort((a, b) => {
    if (a.date === "Coming soon" || !a.date) return 1;
    if (b.date === "Coming soon" || !b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return [...published, ...comingSoonArticles];
}

export function getArticle(slug: string): (Article & { content: string }) | undefined {
  const all = getMarkdownArticles();
  const article = all.find((a) => a.slug === slug && a.status === "published");
  if (!article || !article.content) return undefined;
  return article as Article & { content: string };
}
