import Image from "next/image";
import Link from "next/link";
import { LiveClock } from "@/components/live-clock";

type Project = {
  title: string;
  year: string;
  description: string;
  image?: string;
  aspect: "square" | "tall";
  href?: string;
};

const col1: Project[] = [
  {
    title: "Neo",
    year: "2026",
    description: "AI-native browser",
    aspect: "square",
    href: "/projects",
  },
  {
    title: "Base UI design system",
    year: "2026",
    description: "Multi-brand design system",
    image: "/projects/base-ui.png",
    aspect: "tall",
    href: "/base-ui/components-atomic-design",
  },
  {
    title: "battle.net news",
    year: "2026",
    description: "Editorial news experience",
    image: "/projects/battlenet-news.png",
    aspect: "square",
    href: "/projects",
  },
  {
    title: "myfooddata",
    year: "2026",
    description: "Nutrition data product",
    image: "/projects/myfooddata.png",
    aspect: "square",
    href: "/projects",
  },
];

const col2: Project[] = [
  {
    title: "Brand Bloom",
    year: "2026",
    description: "AI brand assistant",
    aspect: "tall",
    href: "/projects",
  },
  {
    title: "battle.net shop",
    year: "2026",
    description: "Storefront redesign",
    image: "/projects/battlenet-shop.png",
    aspect: "square",
    href: "/projects",
  },
  {
    title: "battle.net blog & cms",
    year: "2026",
    description: "Editorial CMS workflow",
    image: "/projects/battlenet-blog.png",
    aspect: "square",
    href: "/projects",
  },
  {
    title: "idiom",
    year: "2025",
    description: "Language learning concept",
    image: "/projects/idiom.png",
    aspect: "square",
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

function ProjectCard({ project }: { project: Project }) {
  const aspect = project.aspect === "tall" ? "aspect-[1/2]" : "aspect-square";
  const inner = (
    <div className="flex flex-col gap-2">
      <div
        className={`relative w-full overflow-hidden bg-ink-100/70 ${aspect}`}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-serif text-[18px] leading-[1.2] text-ink-900 transition-colors group-hover:text-ember-700">
            {project.title}
          </p>
          <p className="shrink-0 font-mono text-[11px] tracking-wide text-ink-300">
            {project.year}
          </p>
        </div>
        <p className="text-[13px] leading-[20px] text-ink-500">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        className="group block focus-visible:outline-none"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-50 text-ink-900">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-16 px-6 py-12 md:flex-row md:gap-8 md:px-10 md:py-0">
        {/* Left: sticky intro + nav */}
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:w-[300px] md:shrink-0 md:flex-col md:justify-between md:px-0 md:pb-8 md:pt-12">
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

        {/* Right: project image tiles */}
        <section className="flex flex-1 flex-col md:pb-16 md:pt-[120px]">
          <p className="mb-8 font-serif text-[14px] italic leading-none text-ink-500">
            Selected Work
          </p>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-4">
              {col1.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-4">
              {col2.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

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
