# tonyguinta.com — Personal Profile Website

## Project Overview
Personal profile website for Tony Guinta — Director of Software Engineering, 18 years at Optum, AI-native builder. The site controls the narrative when someone Googles his name. Not a resume rehash — LinkedIn does that. This is the human story, strategic thinking, and proof he's not a typical Director.

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 4**
- **React 19**
- **Framer Motion** (subtle animations — fade-ins, scroll reveals, nothing flashy)
- **Deploy target:** Vercel (static export fine)

## Design Direction
- **DARK THEME** — dark background, light text
- **Clean, modern, minimal** — not corporate, not a template
- Professional but with personality
- Good typography — the writing section must be pleasant to read (think medium.com article width and spacing)
- Mobile responsive
- Reference vibe: clean, modern developer portfolio sites — not flashy agency sites

## Site Structure

### Home (`/`)
- Hero section: Tony Guinta, headline, short elevator pitch
- Headline: "Director of Software Engineering | Built a $2.9B Financial Platform Solo → Led the Team That Scaled It | AI-Native Builder"
- 3-4 highlight cards:
  1. Built a $2.9B financial platform from scratch
  2. 18 years scaling teams and systems at Optum
  3. AI-native builder (Claude Code, Codex, multi-agent workflows)
  4. Music → Code → Leadership (unconventional path)
- CTAs to About and Writing sections
- Professional headshot (placeholder image for now — use a gray circle with initials "TG")

### About (`/about`)
- Full narrative bio (content provided in `content/about.md`)
- Career Highlights section at bottom with 4 case study cards:
  - **OTFIN** — Solo build → $2.9B platform → 20-person org
  - **DBSIM** — 20K databases, 2PB+ data, automated scanning
  - **Fanball** — VP running 30 people, acquired by Liberty Media
  - **Paramount** — $5M theatrical distribution system, SOX compliance

### Writing (`/writing`)
- Article listing page — card layout, newest first
- Individual article pages (`/writing/[slug]`) with clean typography
- Articles stored as MDX or markdown in the project
- First article: "The Advertising Model Is Dying. Here's What Replaces It." (content provided in `content/content-aggregator-thesis.md`)
- Two more article placeholders (title + "Coming soon"):
  - "Why I Still Ship Code as a Director"
  - "What Running an AI Coding Pilot Taught Me"

### Contact
- Can be a footer section on every page OR a minimal `/contact` page
- Links: Email (tonyguinta@gmail.com), LinkedIn (linkedin.com/in/tonyguinta), X (@TonyGuinta)
- No contact form — just clean links

## Navigation
- Fixed top nav: Home, About, Writing, Contact
- Clean, minimal — logo or name on left, links on right
- Mobile hamburger menu

## Content Files
- `content/about.md` — About page narrative (copy this into the About page)
- `content/content-aggregator-thesis.md` — First article (render as a writing page)

## Important Notes
- This is a DARK theme site. Do not use light backgrounds.
- Keep it professional but NOT corporate. This should feel like a senior engineer's site, not a Fortune 500 landing page.
- Typography matters — especially on article pages. Good line height, comfortable reading width, proper heading hierarchy.
- Animations should be subtle — fade-in on scroll, gentle hover states. Nothing that bounces or slides aggressively.
- The site should feel fast. No heavy assets, no unnecessary JavaScript.

## Do NOT include
- Blog posting schedule or CMS
- Portfolio screenshots
- Testimonials section
- Contact forms
- Analytics (we'll add later if needed)
- Cookie banners
