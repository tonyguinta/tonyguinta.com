---
title: "AI Development Best Practices"
subtitle: "There are no best practices. Here's what actually works."
slug: "ai-development-best-practices"
date: "2026-02-21"
readTime: "12 min read"
status: "published"
---

If anyone tells you they have an AI development best practice, they're full of shit.

We're all figuring this out in real time, compensating for current limitations, and hoping our approaches don't look ridiculous six months from now. Anyone claiming they've figured out the definitive way to develop with AI is either selling you something or parroting what worked for them once.

What I can give you are two concepts I keep coming back to — whether I'm building a greenfield app from scratch or bringing AI-assisted development into a large enterprise codebase:

1. **Context is your job.** The agent is only as good as the context you give it. Nobody's going to build that for you.
2. **The agent is an expert across many domains. Treat it like one.** The default is to treat it like a code generator — but if you're building a financial application, it understands GAAP well enough to challenge your UI decisions. Building something with legal implications? It can spot liability issues your engineers would miss. If you're only asking it to write code, you're barely scratching the surface.

The field moves fast enough that some of what I describe below will be obsolete by the time you read it. The concepts won't be.

## Software Engineering Is Dead

No, it's not. But the role is evolving — and not just for engineers. Everyone involved in product development — product owners, BAs, technical PMs — is part of this shift. More on that in a moment.

For engineers specifically, I hear the pushback already: _"I don't want to become a project manager."_ Good — that's not what this is. Nobody's asking you to write Jira tickets and run standups. What's happening is a **technical** evolution, not a management one.

Software engineers need to scale up into **systems architects** — people who design solutions at the system level and direct AI agents to build them. Your job becomes collaborating with an AI agent to produce a detailed technical implementation plan: models and data types, classes and methods, file system layout, unit test scenarios. You're not managing people. You're not writing status reports. You're designing systems and orchestrating agents to construct them. That's _more_ technical than what most engineers do today, not less.

This isn't one-shot coding where you throw a prompt over the wall and hope for the best. This isn't vibe coding. It's structured collaboration — conversation and iteration until the plan is airtight. Then you build.

**The technical bar hasn't dropped.** You still need to know the majority of what needs to be done — even if you don't know how to do every piece of it. If you don't understand the architecture, the agent will confidently build the wrong thing. The difference is that your primary output is now a spec, not a pull request.

And "learning to prompt better" barely scratches the surface of what's new. Working effectively with AI agents requires an expanding set of skills that didn't exist two years ago. A few examples: understanding MCP and its costs (every tool call eats context window tokens), knowing how skills are structured and maintained, recognizing when sub-agent delegation helps versus when it makes things worse, and managing your context window strategically — knowing when to compact a conversation, when to start a fresh session, and when you're burning tokens on stale context that's hurting more than helping. This isn't an exhaustive list. The skillset is still forming, and it will keep evolving as the tools do.

## The "First Day on the Job" Mental Model

Every new session with an agent is like sitting down with a very skilled engineer on their first day at the company. They've got the technical chops — but they know nothing about your product, your users, your architecture, your conventions, or the decisions that got you here.

You wouldn't expect a senior hire to just "figure it out" from the codebase. Don't expect that from the agent either. Context documentation is the onboarding packet for a teammate who shows up fresh every single morning.

## Context Engineering: The Actual Job

The agent is only as good as the context it receives. Full stop.

This is especially brutal in **brownfield projects** — existing codebases where the history, conventions, and tribal knowledge live in people's heads. The agent drops in cold and you have to give it enough to be useful without drowning it.

And greenfield isn't the escape hatch people think it is. It starts easy, sure. But the context documentation problems you face in brownfield from day one are the same problems greenfield encounters later as the application grows. I've seen this firsthand — a side project I built from scratch with Claude Code eventually needed the same systematic context engineering as the enterprise platform I manage at work. The complexity always catches up. The only question is whether you've built the discipline to handle it before it arrives.

### The Context Window Tax

Everything you feed the agent eats context window — more context means better understanding, but less room for the actual work. A scattered library of markdown files doesn't cut it. The documentation needs to be deliberate, concise, and structured so the agent loads only what's relevant to the current task.

This tradeoff drives the context hierarchy. You can't dump everything into one file. You need layers — stable foundational context at the top, volatile work instructions at the bottom — and you load only the layers the current task requires.

## Iterative Collaboration: How to Actually Work With an Agent

The biggest mistake I see is treating agents like vending machines. Insert prompt, receive code. That's not collaboration — that's a very expensive Stack Overflow.

Real collaboration looks like what happens between two senior engineers solving a hard problem. One person presents ideas. The other pushes back, adds to them, raises concerns. Ideas stack on top of each other, merge, become composites. _"This piece is good, but this part has holes — here's how I'd shore it up."_ Back and forth until you arrive at something neither of you would have built alone.

You have to **force that iteration** with an AI agent. Left to their defaults, models will say "sounds good, let me build it" and fill every gap with assumptions. Those assumptions are where things go sideways.

### The Agent Knows More Than Code

This is where most people leave value on the table — and it connects directly to concept #2 from the top. This also isn't just for engineers. A product owner iterating with an agent on requirements, edge cases, and persona expectations is doing the same kind of collaboration. The techniques below work for anyone building software with AI, regardless of their role.

When you're stuck between options, **turn the conversation back to the persona who'll actually use the product.** What are their expectations? What's going to confuse them? What are we overengineering that they don't need? The persona lens cuts through complexity that looks intractable from a pure engineering perspective. The agent has enough domain knowledge to play the role of the end user, the accountant, the compliance officer — whoever your product serves. Use that.

### Prompt Techniques That Actually Work

**"Do you have any questions or concerns?"** — Forces the agent to surface uncertainties before building. You address them, iterate, repeat. This single prompt prevents more bad assumptions than any amount of spec writing.

**"What else?"** — Append this to the bottom of your answers. Without it, agents jump straight to building. With it, they keep the conversation going and surface things they otherwise would have silently assumed.

**"Give me numbered options along with your recommendation."** — This one changed how I work. Instead of letting the agent ask lazy open-ended questions, you require it to think through the options, weigh tradeoffs, and commit to a position. In practice, the recommendation is right about 80% of the time — faster decisions, less cognitive load on you. When it's wrong, the options are still useful — you pick a different one or combine elements. The format itself prevents conversations from going in circles.

**The goal: exhaust the conversation before writing a line of code.** By the time the agent starts building, there should be minimal ambiguity. Every assumption surfaced and addressed.

**Then write it down.** The implementation plan that comes out of this conversation needs to live on disk — not just in the chat session. Sessions end, context windows compact, conversations get lost. If the plan only exists in the thread where you brainstormed it, you'll lose it exactly when you need it most: when you start a new session to build, or when a teammate picks up where you left off. Document the plan, store it with the project, and feed it to the agent as context when it's time to execute.

### The Sub-Agent Trust Problem

One more thing on collaboration that most AI content won't tell you: even when the main agent produces a solid, documented plan — **something often gets lost when it delegates to a sub-agent for the build.**

I've encountered this repeatedly. The context transfer is lossy. The main agent understands the full picture — the sub-agent gets a summary, and summaries lose nuance. For complex implementation work that requires deep understanding of the plan plus codebase plus conventions, the build quality from sub-agents is usually unacceptable.

This isn't absolute — if the task is well-scoped, the plan is detailed enough to leave no room for interpretation, and the complexity is low, sub-agents can handle implementation fine. The problems start when there's ambiguity for the agent to fill with its own assumptions. The more judgment calls required, the worse delegation performs.

Sub-agents are reliably good at searching the codebase, code review, analysis, and research — tasks that don't require sustained deep context. For the heavy lifting, work with the main agent directly.

## Putting It Together: Enterprise Brownfield

Everything above comes together when you see it applied to a real environment. I'm leading an AI-driven product development pilot at a Fortune 5 healthcare company on one of their large financial platforms — the kind of codebase where context engineering isn't optional, it's survival.

### The Environment

A brownfield suite of applications where each app has its own separate UI and API repositories, some shared services are duplicated across repos, and the boundaries between apps have blurred over years of feature accretion. Angular native federation brings everything into one website. Shared library repos handle security and navigation across all apps.

### The Pilot

We scoped it tight: one feature, multiple user stories, focused on just the UI and API repos for that feature. The goal is to prove the process works at the unit level before scaling. The pilot is still early — I'll have outcomes to report in a future piece — but the context architecture is already proving its value in how it structures the work.

### The Context Hierarchy

We built a layered context structure:

```
AGENT.md (how to work — conventions, guardrails, autonomy level)
  └── Application Context (what is this app, who uses it, why)
        └── Technical Context (architecture, patterns, conventions)
              └── Feature Context (what problems this feature solves)
                    └── User Story (the specific work to be done)
```

The design decisions that matter:

**Separate product context from technical context.** Application and feature documents cover purpose, personas, and problems solved — written so the product team can own and maintain them. Technical architecture goes in its own file, owned by engineering. Product feeds context into the AI pipeline without needing to understand the codebase. This is the kind of organizational leverage that matters when you're not just using these tools yourself — you're rolling them out to a team.

**Stability by design.** Application and feature context should be glacial — rarely changing. Anything volatile goes in user stories. The agent gets a stable foundation sprint after sprint, with only the work instructions changing. This directly addresses the context window tax: you're not rebuilding foundational context every session, just loading the layer that's relevant to today's work.

**The autonomy gradient.** AGENT.md sets the guardrails — what the agent can do without asking, what requires confirmation, what's off-limits. We start supervised and increase autonomy as the agent demonstrates it understands the system.

### Scaling to a Team

The hardest part isn't getting this to work for me — it's getting my engineering team to adopt it. The context hierarchy helps because it separates the concerns: product people maintain what they know (application and feature context), engineers maintain what they know (technical context and AGENT.md), and nobody has to understand the whole stack of documents to contribute their part.

But the collaboration techniques — the iterative prompting, the "options with recommendation" format, the discipline of exhausting the conversation before building — that's a skill that has to be coached. I'm pairing with team members on their first AI-assisted stories, the same way you'd onboard someone to any new development practice: work alongside them until the muscle memory builds. There's no shortcut for that.

## The Point

This isn't a methodology. There's no framework to adopt, no certification to earn. The tools will change. The models will change. Some of the specific techniques I described here will evolve or become irrelevant.

What won't change: the agent needs context, and you're the one who has to build it. The agent has knowledge you're likely not fully leveraging, and the only way to access it is through real collaboration — not delegation, not one-shot prompts, not vibe coding.

The teams who internalize those two ideas — engineers, product owners, and everyone in between — will figure out the rest as the tools evolve. The ones waiting for someone to hand them a best practice will still be waiting.

---

*By Tony Guinta · @TonyGuinta · 2026*
