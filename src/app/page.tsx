import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const highlights = [
  {
    title: "Built a $2.9B Financial Platform",
    description:
      "Solo-built the first application that became OTFIN — tracking $2.9 billion annually across non-capital tech expenses, capital purchases, and IT chargeback billing at Optum.",
  },
  {
    title: "18 Years Scaling Teams & Systems",
    description:
      "Grew a one-person build into a 20-person product organization spanning engineering, product, and QA. The platform and team are still running.",
  },
  {
    title: "AI-Native Builder",
    description:
      "Building full-stack applications with Claude Code. Running multi-agent workflows with automated pipelines. Leading a Codex pilot for enterprise AI adoption.",
  },
  {
    title: "Music → Code → Leadership",
    description:
      "Jazz guitar at Five Towns College. Cello at Brooklyn Conservatory. A decade at Paramount Pictures. VP at a fantasy sports company. Then 18 years building at Optum.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 py-20 text-center md:py-32">
        <FadeIn>
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-800 text-2xl font-semibold text-zinc-400">
            TG
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tony Guinta
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Director of Software Engineering | Built a $2.9B Financial Platform
            Solo &rarr; Led the Team That Scaled It | AI-Native Builder
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              About Me
            </Link>
            <Link
              href="/writing"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Read My Writing
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Highlight Cards */}
      <section className="pb-20 md:pb-32">
        <FadeIn>
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight">
            What I Do
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover">
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
