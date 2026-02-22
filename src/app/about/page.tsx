import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { getAboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
};

const caseStudies = [
  {
    name: "Optum (UnitedHealth Group)",
    tagline: "Two Platforms, Two Orgs, Built from Scratch",
    description:
      "Built DBSIM — a database inventory system covering 20,000+ databases and 2 petabytes of data. Later built a financial platform tracking billions in annual technology spend, solo from requirements to production. Grew both into 20-person organizations.",
  },
  {
    name: "Fanball",
    tagline: "VP in 4 Months, 30-Person Team, Liberty Media Acquisition",
    description:
      "One of the biggest fantasy sports platforms in the country. Led a team of 30 across product, engineering, design, and content. Built custom applications for AOL, NASCAR, PGA Tour, Discovery Channel.",
  },
  {
    name: "Paramount Pictures",
    tagline: "$5M Distribution System, Decade of Motion Picture Tech",
    description:
      "A decade building technology for motion picture distribution and licensing. $5 million theatrical distribution system across an international WAN. IP licensing, music clearance systems spanning Paramount and CBS Television. SOX compliance.",
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

      {/* Executive summary */}
      <div className="prose-article">
        {sections[0] && (
          <FadeIn delay={0.1}>
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: sections[0] }} />
          </FadeIn>
        )}
      </div>

      <div className="prose-article">
        {/* Section 2: Brooklyn origins, music, dance, early tech */}
        {sections[1] && (
          <FadeIn delay={0.15}>
            <div dangerouslySetInnerHTML={{ __html: sections[1] }} />
          </FadeIn>
        )}

        {/* Dance photo */}
        <FadeIn delay={0.2}>
          <figure className="my-8">
            <Image
              src="/images/dance-nationals.jpg"
              alt="Tony Guinta and Lisa competing at the 2015 USA Dance National DanceSport Championship"
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

        {/* Section 3: Paramount → Fanball → Optum → AI → closing */}
        {sections[2] && (
          <FadeIn delay={0.25}>
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
