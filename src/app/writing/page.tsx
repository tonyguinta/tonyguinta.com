import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <FadeIn>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Writing
        </h1>
        <p className="mb-12 text-lg text-muted">
          Ideas on technology, leadership, and what comes next.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {articles.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            {article.status === "published" ? (
              <Link href={`/writing/${article.slug}`} className="group block">
                <article className="rounded-xl border border-border bg-card p-6 transition-colors group-hover:bg-card-hover">
                  <div className="mb-2 flex items-center gap-3 text-sm text-muted">
                    <span>{article.date}</span>
                    {article.readTime && (
                      <>
                        <span className="text-border">·</span>
                        <span>{article.readTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-accent">
                    {article.title}
                  </h2>
                  {article.subtitle && (
                    <p className="text-sm leading-relaxed text-muted">
                      {article.subtitle}
                    </p>
                  )}
                </article>
              </Link>
            ) : (
              <article className="rounded-xl border border-border/50 bg-card/50 p-6 opacity-60">
                <div className="mb-2 text-sm text-muted">{article.date}</div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </article>
            )}
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
