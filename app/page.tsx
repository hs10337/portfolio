import Image from "next/image";
import Link from "next/link";

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
    year: "2026",
    description: "Language learning concept",
    image: "/projects/idiom.png",
    aspect: "square",
    href: "/idiom",
  },
];

const sectionLinks = [
  { label: "01 PROJECTS", href: "/projects" },
  { label: "02 BLOGS", href: "/blog" },
  { label: "03 ABOUT ME", href: "/about" },
];

const contactLinks = [
  { label: "04 EMAIL", href: "mailto:hello@belle.design" },
  { label: "05 RESUME", href: "/resume.pdf" },
  { label: "06 LINKEDIN", href: "https://www.linkedin.com/" },
  { label: "07 INSTAGRAM", href: "https://www.instagram.com/" },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d="M0.5 7H15" />
      <path d="M9 1L15 7L9 13" />
    </svg>
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
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
            {project.title}
          </p>
          <p className="shrink-0 text-[14px] leading-[22px] text-ink-500">
            {project.year}
          </p>
        </div>
        <p className="text-[14px] leading-[22px] text-ink-500">
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
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-10 md:flex-row md:gap-0 md:px-0 md:py-0">
        {/* Left: sticky intro + nav */}
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:w-[480px] md:shrink-0 md:flex-col md:justify-between md:px-6 md:pb-6 md:pt-10">
          <div className="flex flex-col gap-10">
            <div className="size-[52px] bg-ink-100" aria-hidden="true" />
            <p className="text-[16px] leading-[26px] text-ink-500">
              Hi, I&rsquo;m Belle &mdash; a San Francisco&ndash;based product
              designer blending user-centered thinking with data-driven
              strategy. I bring a startup mindset to design, shaped by my past
              life as an entrepreneur and growth hacker.
            </p>
            <div className="h-px w-full bg-ink-100" />
            <nav className="flex flex-col gap-10">
              <ul className="flex list-none flex-col gap-3">
                {sectionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-3 text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex list-none flex-col gap-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="mt-12 text-center text-[14px] leading-[22px] text-ink-300 md:mt-0">
            ©2026 Belle Lee
          </p>
        </aside>

        {/* Right: scrolling project grid */}
        <section className="flex flex-1 gap-4 md:px-10 md:pb-10 md:pt-[120px]">
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
        </section>
      </div>
    </main>
  );
}
