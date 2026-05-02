import Link from "next/link";
import { LiveClock } from "@/components/live-clock";

type Project = {
  title: string;
  year: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Neo",
    year: "2026",
    description:
      "Designing an AI-native browser — chat, tasks, daily brief, and a privacy-first feed.",
    href: "/projects",
  },
  {
    title: "Base UI design system",
    year: "2026",
    description:
      "A multi-brand design system built on atomic foundations and clear semantic tokens.",
    href: "/base-ui/components-atomic-design",
  },
  {
    title: "battle.net news",
    year: "2026",
    description:
      "An editorial news experience for one of the largest gaming communities in the world.",
    href: "/projects",
  },
  {
    title: "battle.net shop",
    year: "2026",
    description: "Storefront redesign focused on clarity, trust, and conversion.",
    href: "/projects",
  },
  {
    title: "battle.net blog & cms",
    year: "2026",
    description:
      "An editorial CMS workflow that lets writers ship polished posts without designer hand-holding.",
    href: "/projects",
  },
  {
    title: "Brand Bloom",
    year: "2026",
    description:
      "An AI brand assistant for restaurants, bakeries, and small creative businesses.",
    href: "/projects",
  },
  {
    title: "myfooddata",
    year: "2026",
    description: "Rethinking nutrition data for everyday curiosity.",
    href: "/projects",
  },
  {
    title: "idiom",
    year: "2025",
    description:
      "A language-learning concept that swaps drills for conversation and quiet repetition.",
    href: "/idiom",
  },
];

const tableOfContents = [
  { num: "01", label: "Projects", href: "/projects" },
  { num: "02", label: "Writing", href: "/blog" },
  { num: "03", label: "About me", href: "/about" },
];

const nodes = [
  { num: "04", label: "Email", href: "mailto:hello@belle.design", external: true },
  { num: "05", label: "Résumé", href: "/resume.pdf", external: true },
  { num: "06", label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  { num: "07", label: "Instagram", href: "https://www.instagram.com/", external: true },
];

function ArrowOut() {
  return (
    <span aria-hidden="true" className="font-sans text-ink-300">
      ↗
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-50 text-ink-900">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-6 py-12 md:flex-row md:gap-0 md:px-0 md:py-0">
        {/* Left: sticky intro + nav */}
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:w-[520px] md:shrink-0 md:flex-col md:justify-between md:px-10 md:pb-8 md:pt-12">
          <div className="flex flex-col gap-10">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.01em] text-ink-900 md:text-[52px]">
              Belle Lee
            </h1>

            <p className="max-w-[420px] text-[15px] leading-[26px] text-ink-700">
              Belle is a product designer with a love for systems and an
              obsessive commitment to craft. She is interested in building
              meaningful, quietly beautiful AI-native tools that make daily
              life feel more thoughtful. Currently designing{" "}
              <span className="text-ink-900">@ Neo</span>. Previously{" "}
              <span className="text-ink-900">@ Battle.net</span> and{" "}
              <span className="text-ink-900">@ early-stage startups</span>.
            </p>

            <div className="flex flex-col gap-5">
              <p className="font-serif text-[14px] italic leading-none text-ink-500">
                Table of Contents
              </p>
              <ul className="flex list-none flex-col gap-2.5">
                {tableOfContents.map((link) => (
                  <li key={link.num}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-3 text-[14px] leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      <span className="w-6 font-mono text-[12px] tracking-wide text-ink-300">
                        {link.num}
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <span
                        aria-hidden="true"
                        className="text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-ember-700"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-serif text-[14px] italic leading-none text-ink-500">
                Nodes
              </p>
              <ul className="flex list-none flex-col gap-2.5">
                {nodes.map((link) => (
                  <li key={link.num}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-baseline gap-3 text-[14px] leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      <span className="w-6 font-mono text-[12px] tracking-wide text-ink-300">
                        {link.num}
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <span className="transition-colors group-hover:text-ember-700">
                        <ArrowOut />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-300 md:mt-0">
            <p>©2026 Belle Lee · Last updated 05.02.2026</p>
            <p>
              San Francisco · <LiveClock />
            </p>
          </div>
        </aside>

        {/* Right: project listings */}
        <section className="flex flex-1 flex-col md:px-10 md:pb-16 md:pt-[120px]">
          <p className="font-serif text-[14px] italic leading-none text-ink-500">
            Selected Work
          </p>

          <ol className="mt-8 flex list-none flex-col">
            {projects.map((project, i) => (
              <li
                key={project.title}
                className={
                  i === 0
                    ? "border-y border-ink-100"
                    : "border-b border-ink-100"
                }
              >
                <Link
                  href={project.href ?? "/projects"}
                  className="group flex flex-col gap-2 py-7 transition-colors md:flex-row md:items-baseline md:gap-8"
                >
                  <div className="flex flex-1 items-baseline justify-between gap-4">
                    <h2 className="font-serif text-[28px] leading-[1.15] tracking-[-0.01em] text-ink-900 transition-colors group-hover:text-ember-700 md:text-[32px]">
                      {project.title}
                    </h2>
                    <span className="shrink-0 font-mono text-[12px] tracking-wide text-ink-300">
                      {project.year}
                    </span>
                  </div>
                  <p className="max-w-[360px] text-[14px] leading-[22px] text-ink-500 md:flex-1 md:text-right">
                    {project.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-ember-700 md:inline"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-24 mb-8 flex flex-col gap-4">
            <p className="font-serif text-[36px] italic leading-[1.1] tracking-[-0.01em] text-ink-900 md:text-[44px]">
              Thanks for being here.
            </p>
            <p className="text-[14px] leading-[22px] text-ink-500">
              Want to work together, or just say hi?{" "}
              <a
                href="mailto:hello@belle.design"
                className="text-ink-900 underline decoration-ink-300 underline-offset-4 transition-colors hover:text-ember-700 hover:decoration-ember-500"
              >
                hello@belle.design
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
