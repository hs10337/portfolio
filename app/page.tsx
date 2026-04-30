import Image from "next/image";
import Link from "next/link";

type Project = {
  number: string;
  title: string;
  caption: string;
  image: string;
  href: string;
  status?: "coming-soon";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Base UI Design System",
    caption:
      "Multi-brand design system for all of Blizzard and Battle.net.",
    image: "/projects/base-ui.png",
    href: "/base-ui/building-multi-brand-design-system",
  },
  {
    number: "02",
    title: "Components in Atomic Design",
    caption:
      "Designing flexible components following atomic design principles.",
    image: "/projects/components-atomic-design.png",
    href: "/base-ui/components-atomic-design",
  },
  {
    number: "03",
    title: "Battle.net Shop",
    caption: "Product detail page for both new and returning players.",
    image: "/projects/battlenet-shop.png",
    href: "#",
  },
  {
    number: "04",
    title: "Battle.net News",
    caption:
      "Revamping the news page with improved navigation and customizable templates.",
    image: "/projects/battlenet-news.png",
    href: "#",
  },
  {
    number: "05",
    title: "Battle.net Blog & CMS",
    caption:
      "Simplifying blog presentation and plugin design for a headless CMS.",
    image: "/projects/battlenet-blog.png",
    href: "#",
  },
  {
    number: "07",
    title: "MyFoodData",
    caption:
      "Meal planner app with sophisticated and customizable nutrition data.",
    image: "/projects/myfooddata.png",
    href: "#",
  },
  {
    number: "08",
    title: "Idiom",
    caption:
      "Context-based language learning app for vocabulary acquisition.",
    image: "/projects/idiom.png",
    href: "/idiom",
  },
  {
    number: "06",
    title: "Momento",
    caption:
      "AI-powered journaling app for new moms to deepen their relationship with their child.",
    image: "/projects/momento.png",
    href: "#",
    status: "coming-soon",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <About />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-cream-50/75 border-b border-ink-100/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif italic text-lg text-ink-900 tracking-tight"
        >
          Belle Lee
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm text-ink-700">
            <li>
              <Link
                href="#work"
                className="hover:text-ink-900 transition-colors"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-ink-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-ink-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 10%, var(--color-pink-50) 0%, transparent 60%), radial-gradient(50% 50% at 90% 30%, var(--color-lavender-50) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <p className="text-eyebrow font-sans uppercase text-ink-500 mb-10">
          Belle Lee · Portfolio · Product Designer
        </p>
        <h1 className="font-serif text-display text-ink-900 max-w-4xl">
          <span className="italic">Hi, I&apos;m Belle.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-700">
          A San Francisco–based product designer blending user-centered thinking
          with data-driven strategy. I bring a startup mindset to design, shaped
          by my past life as an entrepreneur and growth hacker.
        </p>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 md:px-10 pb-section md:pb-section-lg"
    >
      <div className="flex items-baseline justify-between mb-12 md:mb-16">
        <h2 className="text-eyebrow font-sans uppercase text-ink-500">
          Selected work
        </h2>
        <p className="text-xs font-sans uppercase tracking-[0.18em] text-ink-300">
          {projects.length} projects
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
        {projects.map((p) => (
          <li key={p.number}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === "coming-soon";
  const cardInner = (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-shell-100 ring-1 ring-ink-100/60">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        {isComingSoon && (
          <span className="absolute top-4 left-4 rounded-full bg-cream-50/90 px-3 py-1 text-[0.65rem] font-sans uppercase tracking-[0.18em] text-ember-700">
            Coming soon
          </span>
        )}
      </div>
      <div className="mt-5 flex items-baseline gap-4">
        <span className="font-sans text-xs tracking-[0.2em] text-ink-300 mt-0.5">
          [{project.number}]
        </span>
        <div>
          <h3 className="font-sans text-xl text-ink-900 leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink-500 leading-relaxed max-w-md">
            {project.caption}
          </p>
        </div>
      </div>
    </article>
  );

  if (isComingSoon) {
    return <div aria-disabled className="opacity-80">{cardInner}</div>;
  }
  return (
    <Link
      href={project.href}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-50 rounded-xl"
    >
      {cardInner}
    </Link>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-ink-100/60"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-section md:py-section-lg grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-eyebrow font-sans uppercase text-ink-500 mb-6">
            About
          </p>
          <h2 className="font-serif text-display text-ink-900 italic">
            Let&apos;s chat.
          </h2>
          <p
            id="contact"
            className="mt-8 text-ink-700"
          >
            <a
              href="mailto:hello@bellelee.com"
              className="inline-flex items-center gap-2 text-base text-ink-900 underline decoration-ember-500/60 underline-offset-4 hover:decoration-ember-500 transition-colors"
            >
              hello@bellelee.com
            </a>
          </p>
        </div>
        <div className="md:col-span-7 md:pt-2 space-y-6 text-ink-700 text-lg leading-relaxed">
          <p>
            I&apos;ve always admired how thoughtful designs have the power to
            change our world. From working on product design strategy to
            sparking delight with a single button, I love working on projects
            that create extraordinary experiences.
          </p>
          <p>
            In my previous life, I was a growth hacker, country manager,
            entrepreneur, architecture student and third-culture-kid. When
            I&apos;m not designing, you can find me doodling digital art,
            running outside, browsing the next baking idea, or making lists of
            things — trip ideas, illustration inspiration, movies and books.
          </p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans uppercase tracking-[0.18em] text-ink-300">
        <span>© {year} Belle Lee</span>
        <span>Made with care in San Francisco</span>
      </div>
    </footer>
  );
}
