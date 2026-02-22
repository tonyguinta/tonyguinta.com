import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
};

const caseStudies = [
  {
    name: "Enterprise Financial Platform",
    tagline: "Solo Build → Billions in Annual Spend → 20-Person Org",
    description:
      "Built the first application solo — requirements gathering, architecture, development, production deployment. Ran it in production for nearly a year before getting budget to hire. Grew it into a 20-person product organization tracking billions in annual technology spend.",
  },
  {
    name: "DBSIM",
    tagline: "20K Databases, 2PB+ Data, Automated Scanning",
    description:
      "Built a database inventory and metrics system covering 20,000+ databases and 2 petabytes of data. Identified the gap, designed the solution, and built it — because that's what needed to happen.",
  },
  {
    name: "Fanball",
    tagline: "VP Running 30 People, Acquired by Liberty Media",
    description:
      "VP at one of the biggest fantasy sports platforms in the country. Ran a team of 30 across product, engineering, design, and content. Built custom applications for AOL, NASCAR, PGA Tour, Discovery Channel.",
  },
  {
    name: "Paramount",
    tagline: "$5M Theatrical Distribution System, SOX Compliance",
    description:
      "Spent a decade at Paramount Pictures building technology for motion picture distribution and licensing. A $5 million theatrical distribution system across an international WAN. IP licensing, music clearance, annual IT budgets, SOX compliance.",
  },
];

export default function AboutPage() {
  const sections = getAboutContent();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <FadeIn>
        <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">
          About
        </h1>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-12 flex justify-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-56 md:w-56">
            <Image
              src="/images/headshot.jpg"
              alt="Tony Guinta"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </FadeIn>

      <div className="prose-article">
        {/* Section 1: Music origins + early tech */}
        {sections[0] && (
          <FadeIn delay={0.1}>
            <div dangerouslySetInnerHTML={{ __html: sections[0] }} />
          </FadeIn>
        )}

        {/* Section 2: Paramount, Fanball, Dance */}
        {sections[1] && (
          <FadeIn delay={0.2}>
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
          </FadeIn>
        )}

        {/* Dance photo */}
        <FadeIn delay={0.25}>
          <figure className="my-8">
            <Image
              src="/images/dance-nationals.jpg"
              alt="Tony Guinta and Lisa Mohr competing at the 2015 USA Dance National DanceSport Championship"
              width={800}
              height={1067}
              className="w-full rounded-xl"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              Competing at the 2015 USA Dance Nationals with Lisa. Three
              first-place titles. Photo by Ryan Kenner Photography.
            </figcaption>
          </figure>
        </FadeIn>

        {/* Section 3: Fortune 5, DBSIM, AI, closing */}
        {sections[2] && (
          <FadeIn delay={0.3}>
            <div dangerouslySetInnerHTML={{ __html: sections[2] }} />
          </FadeIn>
        )}
      </div>

      <section className="mt-20">
        <FadeIn>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">
            Career Highlights
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.name} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  {study.name}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{study.tagline}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {study.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
