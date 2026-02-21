import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import FadeIn from "@/components/FadeIn";
import { getArticle, getAllArticles } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles()
    .filter((a) => a.status === "published")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const html = marked(article.content);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <FadeIn>
        <Link
          href="/writing"
          className="mb-8 inline-block text-sm text-muted transition-colors hover:text-foreground"
        >
          &larr; Back to Writing
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mb-4 text-lg text-muted">{article.subtitle}</p>
          )}
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>Tony Guinta</span>
            <span className="text-border">·</span>
            <span>{article.date}</span>
            {article.readTime && (
              <>
                <span className="text-border">·</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </FadeIn>
    </div>
  );
}
