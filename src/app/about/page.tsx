import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

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
        <FadeIn delay={0.1}>
          <p>
            I wanted to be a rock star. Studied jazz guitar and bass at Five
            Towns College on Long Island, then auditioned into the Brooklyn
            College Conservatory on cello. I was good enough to get in. I
            wasn&apos;t good enough to sight-read at the speed the program
            demanded. So I pivoted.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p>
            I&apos;d always been the kid who could make a computer do things. My
            first internet account was a Netcom shell — command line, no browser.
            I was optimizing autoexec.bat and config.sys on Windows 3.1 while my
            friends were still figuring out how to print. When the music path
            closed, the tech path was already there.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p>
            In 1996 I landed at Paramount Pictures, where I spent the next
            decade building technology for motion picture distribution and
            licensing. A $5 million theatrical distribution system across an
            international WAN. IP licensing and music clearance systems spanning
            Paramount and CBS Television. Annual IT budgets, SOX compliance,
            meetings with the division CTO. I walked in as a developer and
            walked out managing the whole operation.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p>
            After Paramount, I moved to Minnesota and took a VP role at a
            fantasy sports company called Fanball — one of the biggest platforms
            in the country before ESPN and Yahoo showed up with free leagues. I
            ran a team of about 30 across product, engineering, design, and
            content. We built custom applications for AOL, NASCAR, PGA Tour,
            Discovery Channel. The company was significant enough for Liberty
            Media to acquire.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <p>
            Somewhere along the way, I started ballroom dancing. What began as a
            social hobby turned competitive fast — my partner Lisa and I trained
            in Rhythm and Smooth, qualified at nationals, and took home three
            first-place titles at the 2015 USA Dance National DanceSport
            Championship. That same drive to master something completely is the
            thread that connects music, dance, and engineering for me.
          </p>
        </FadeIn>

        <FadeIn delay={0.29}>
          <figure className="my-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/dance-nationals.jpg"
                alt="Tony Guinta and Lisa Mohr competing at the 2015 USA Dance National DanceSport Championship"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted">
              Competing at the 2015 USA Dance Nationals with Lisa. Three
              first-place titles. Photo by Ryan Kenner Photography.
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p>
            Then in 2008, I joined a Fortune 5 healthcare company. I built the first application in what
            became a financial platform tracking billions in annual technology spend
            across non-capital tech expenses, capital purchases, and IT
            chargeback billing. I built v1 solo. Requirements gathering,
            architecture, development, production deployment. I ran it in
            production for nearly a year before leadership gave me budget to
            hire. That first app became a suite, and I grew the team from just
            me to a 20-person product organization spanning engineering, product,
            and QA. Eighteen years later, the platform and the team are still
            running.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p>
            Every chapter of my career has the same pattern: start with nothing,
            build something that works, prove its value, then scale it. I&apos;ve
            never been the kind of leader who stops being technical. I still
            review code. I still know the codebase. I built DBSIM — a database
            inventory and metrics system covering 20,000+ databases and 2
            petabytes of data — because I saw the gap and filled it.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p>
            Right now I&apos;m deep in the AI engineering space. Not the slide
            deck version — the real one. I build full-stack applications with
            Claude Code. I run multi-agent workflows with automated pipelines,
            browser automation, and cron-scheduled tasks. I&apos;m leading a
            Codex pilot to bring AI coding tools into my team&apos;s daily
            workflow. I&apos;ve been hands-on with these tools since early 2025,
            and the gap between what AI can actually do and what most engineering
            leaders think it can do is enormous.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="text-lg font-medium text-foreground">
            I&apos;m looking for the next thing to build.
          </p>
        </FadeIn>
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
