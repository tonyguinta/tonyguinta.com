import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
};

const links = [
  {
    label: "Email",
    href: "mailto:tonyguinta@gmail.com",
    display: "tonyguinta@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tonyguinta",
    display: "linkedin.com/in/tonyguinta",
  },
  {
    label: "X",
    href: "https://x.com/TwoPartyLie",
    display: "@TwoPartyLie",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <FadeIn>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>
        <p className="mb-12 text-lg text-muted">
          Want to connect? Reach out through any of the channels below.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
            >
              <div>
                <div className="mb-1 text-sm font-medium text-muted">
                  {link.label}
                </div>
                <div className="text-lg font-medium transition-colors group-hover:text-accent">
                  {link.display}
                </div>
              </div>
              <span className="text-muted transition-colors group-hover:text-foreground">
                &rarr;
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
