import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design system — Belle Lee",
  description:
    "Tokens and component patterns in use across the portfolio: colors, type, spacing, motion, and the building blocks of each page.",
};

type Swatch = {
  name: string;
  varName: string;
  hex: string;
  /** Tailwind utility for quick reference. */
  utility: string;
  /** When the text on top should flip to cream for contrast. */
  onDark?: boolean;
};

const colorGroups: { label: string; note: string; swatches: Swatch[] }[] = [
  {
    label: "Cream & Shell",
    note: "Page surfaces and neutral near-whites.",
    swatches: [
      { name: "Cream 50", varName: "--color-cream-50", hex: "#fbfaf8", utility: "bg-cream-50" },
      { name: "Cream 100", varName: "--color-cream-100", hex: "#f2f1ee", utility: "bg-cream-100" },
      { name: "Shell 100", varName: "--color-shell-100", hex: "#e7e6e2", utility: "bg-shell-100" },
    ],
  },
  {
    label: "Pink & Lavender",
    note: "Soft accents for selection, surfaces, and quiet emphasis.",
    swatches: [
      { name: "Pink 50", varName: "--color-pink-50", hex: "#f4ece8", utility: "bg-pink-50" },
      { name: "Pink 100", varName: "--color-pink-100", hex: "#e9d8d2", utility: "bg-pink-100" },
      { name: "Lavender 50", varName: "--color-lavender-50", hex: "#eae6ee", utility: "bg-lavender-50" },
      { name: "Lavender 100", varName: "--color-lavender-100", hex: "#d3cdde", utility: "bg-lavender-100" },
    ],
  },
  {
    label: "Ink",
    note: "Type, borders, and quiet UI surfaces. Ink 900 is the default body color.",
    swatches: [
      { name: "Ink 900", varName: "--color-ink-900", hex: "#1a1816", utility: "bg-ink-900", onDark: true },
      { name: "Ink 700", varName: "--color-ink-700", hex: "#34322f", utility: "bg-ink-700", onDark: true },
      { name: "Ink 500", varName: "--color-ink-500", hex: "#6a6864", utility: "bg-ink-500", onDark: true },
      { name: "Ink 300", varName: "--color-ink-300", hex: "#b4b2ad", utility: "bg-ink-300" },
      { name: "Ink 100", varName: "--color-ink-100", hex: "#e3e1db", utility: "bg-ink-100" },
    ],
  },
  {
    label: "Ember",
    note: "Warm orange accent. Use sparingly — focus rings, hover, key emphasis.",
    swatches: [
      { name: "Ember 300", varName: "--color-ember-300", hex: "#e89476", utility: "bg-ember-300" },
      { name: "Ember 500", varName: "--color-ember-500", hex: "#d9613a", utility: "bg-ember-500", onDark: true },
      { name: "Ember 700", varName: "--color-ember-700", hex: "#b14a25", utility: "bg-ember-700", onDark: true },
    ],
  },
];

const typeSpecs = [
  {
    label: "Display",
    utility: "text-display font-serif",
    spec: "clamp(2.5rem, 5.5vw, 4.75rem) · 1.05 LH · -0.02em",
    sample: <span className="font-serif text-display">Soft future editorial</span>,
  },
  {
    label: "Eyebrow",
    utility: "text-eyebrow uppercase",
    spec: "0.7rem · 1 LH · 0.22em",
    sample: (
      <span className="text-eyebrow uppercase text-ink-500">
        01 Section label
      </span>
    ),
  },
  {
    label: "Body",
    utility: "text-[16px] leading-[26px] text-ink-500",
    spec: "Inter · 16/26",
    sample: (
      <p className="max-w-[44ch] text-[16px] leading-[26px] text-ink-500">
        Hi, I&rsquo;m Belle &mdash; a San Francisco&ndash;based product
        designer blending user-centered thinking with data-driven strategy.
      </p>
    ),
  },
  {
    label: "Project title",
    utility: "text-[13px] uppercase tracking-[0.15em] font-semibold",
    spec: "13/18 · 0.15em · Semibold",
    sample: (
      <span className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
        Base UI design system
      </span>
    ),
  },
  {
    label: "Caption / meta",
    utility: "text-[14px] leading-[22px] text-ink-500",
    spec: "Inter · 14/22",
    sample: (
      <span className="text-[14px] leading-[22px] text-ink-500">
        Multi-brand design system · 2026
      </span>
    ),
  },
  {
    label: "Nav link",
    utility: "text-[14px] font-medium leading-5",
    spec: "Inter · 14/20 · Medium",
    sample: (
      <span className="text-[14px] font-medium leading-5 text-ink-900">
        02 BLOGS
      </span>
    ),
  },
];

const spacingTokens = [
  { name: "spacing-section", value: "7rem (112px)", utility: "py-section" },
  { name: "spacing-section-lg", value: "10rem (160px)", utility: "py-section-lg" },
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

const navItems = [
  { id: "color", index: "01", label: "Color" },
  { id: "type", index: "02", label: "Typography" },
  { id: "spacing", index: "03", label: "Spacing" },
  { id: "components", index: "04", label: "Components" },
  { id: "states", index: "05", label: "States" },
];

function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-10 border-t border-ink-100 pt-12">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-eyebrow uppercase text-ink-500">{index}</span>
        <h2 className="font-serif text-[40px] leading-[1.1] tracking-[-0.01em] text-ink-900">
          {title}
        </h2>
        {intro && (
          <p className="max-w-[60ch] text-[15px] leading-[24px] text-ink-500">
            {intro}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden border border-ink-100 ${swatch.utility}`}
      >
        <span
          className={`absolute bottom-3 left-3 text-[11px] font-medium uppercase tracking-[0.16em] ${
            swatch.onDark ? "text-cream-50" : "text-ink-900"
          }`}
        >
          {swatch.hex}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-[13px] font-medium leading-[18px] text-ink-900">
          {swatch.name}
        </p>
        <p className="font-mono text-[11px] leading-[16px] text-ink-500">
          {swatch.varName}
        </p>
        <p className="font-mono text-[11px] leading-[16px] text-ink-300">
          {swatch.utility}
        </p>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-cream-50 text-ink-900">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-12 md:flex-row md:gap-0 md:px-0 md:py-0">
        {/* Left: sticky nav */}
        <aside className="md:sticky md:top-0 md:flex md:h-screen md:w-[280px] md:shrink-0 md:flex-col md:justify-between md:px-8 md:pb-8 md:pt-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-eyebrow uppercase text-ink-500">
                Internal · Reference
              </span>
              <h1 className="font-serif text-[36px] leading-[1.05] tracking-[-0.01em] text-ink-900">
                Design system
              </h1>
            </div>
            <div className="h-px w-full bg-ink-100" />
            <nav aria-label="Design system sections">
              <ul className="flex list-none flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-center justify-between gap-3 text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      <span>
                        <span className="mr-2 text-ink-300">{item.index}</span>
                        {item.label}
                      </span>
                      <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="h-px w-full bg-ink-100" />
            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
            >
              <ArrowRight className="size-4 -scale-x-100 transition-transform group-hover:-translate-x-0.5" />
              Back to home
            </Link>
          </div>
          <p className="mt-12 text-[13px] leading-[20px] text-ink-300 md:mt-0">
            Tokens in app/globals.css
          </p>
        </aside>

        {/* Right: scrolling content */}
        <div className="flex flex-1 flex-col gap-20 md:px-10 md:pb-24 md:pt-16">
          <header className="flex flex-col gap-4">
            <p className="max-w-[60ch] text-[16px] leading-[26px] text-ink-500">
              Tokens and component patterns in use across the portfolio. Soft
              future editorial — warm neutrals, restrained accents, refined
              typography.
            </p>
          </header>

          {/* Colors */}
        <Section
          id="color"
          index="01 Color"
          title="Primitives"
          intro="Primitive tokens are defined in app/globals.css under @theme. A semantic layer (color.background.primary, color.text.default, etc.) is not yet defined — components reference primitives directly today."
        >
          <div className="flex flex-col gap-12">
            {colorGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                    {group.label}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-ink-500">
                    {group.note}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.swatches.map((s) => (
                    <SwatchCard key={s.varName} swatch={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section
          id="type"
          index="02 Type"
          title="Typography"
          intro="Cormorant Garamond for editorial moments, Inter for UI and body. Bound through next/font CSS variables, exposed as font-serif and font-sans."
        >
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-[260px_1fr]">
              <div className="bg-cream-50 px-5 py-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-900">
                  Token
                </p>
              </div>
              <div className="bg-cream-50 px-5 py-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-900">
                  Sample
                </p>
              </div>
              {typeSpecs.map((spec) => (
                <Fragment key={spec.label}>
                  <div className="flex flex-col gap-1 bg-cream-50 px-5 py-6">
                    <p className="text-[14px] font-medium leading-5 text-ink-900">
                      {spec.label}
                    </p>
                    <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                      {spec.utility}
                    </p>
                    <p className="text-[12px] leading-[18px] text-ink-300">
                      {spec.spec}
                    </p>
                  </div>
                  <div className="flex items-center bg-cream-50 px-5 py-6">
                    {spec.sample}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 border border-ink-100 p-6">
              <p className="text-eyebrow uppercase text-ink-500">Serif</p>
              <p className="font-serif text-[44px] leading-[1.1] tracking-[-0.01em] text-ink-900">
                Cormorant Garamond
              </p>
              <p className="font-serif text-[18px] italic leading-[1.5] text-ink-500">
                Editorial moments — display, quotes, occasional emphasis.
              </p>
              <p className="font-mono text-[11px] leading-[16px] text-ink-300">
                --font-serif · 400, 500, 600 · italic
              </p>
            </div>
            <div className="flex flex-col gap-3 border border-ink-100 p-6">
              <p className="text-eyebrow uppercase text-ink-500">Sans</p>
              <p className="text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-ink-900">
                Inter
              </p>
              <p className="text-[16px] leading-[26px] text-ink-500">
                UI, navigation, body. Default font-family on the body element.
              </p>
              <p className="font-mono text-[11px] leading-[16px] text-ink-300">
                --font-sans · variable
              </p>
            </div>
          </div>
        </Section>

        {/* Spacing */}
        <Section
          id="spacing"
          index="03 Spacing"
          title="Spacing scale"
          intro="Section spacing tokens extend Tailwind's defaults rather than replacing them. The 4px base scale (space-1 through space-96) is still available."
        >
          <div className="flex flex-col gap-4">
            {spacingTokens.map((token) => {
              const widthClass =
                token.name === "spacing-section"
                  ? "w-[112px]"
                  : "w-[160px]";
              return (
                <div
                  key={token.name}
                  className="grid grid-cols-1 items-center gap-4 border border-ink-100 px-5 py-4 md:grid-cols-[220px_1fr_auto]"
                >
                  <div className="flex flex-col">
                    <p className="font-mono text-[12px] leading-[18px] text-ink-900">
                      --{token.name}
                    </p>
                    <p className="font-mono text-[11px] leading-[16px] text-ink-300">
                      {token.utility}
                    </p>
                  </div>
                  <div className={`h-2 bg-ember-300 ${widthClass}`} />
                  <p className="text-[13px] leading-[20px] text-ink-500">
                    {token.value}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Components */}
        <Section
          id="components"
          index="04 Components"
          title="Patterns in use"
          intro="The portfolio is intentionally small. These are the recurring patterns rendered today, inlined in app/page.tsx."
        >
          <div className="flex flex-col gap-12">
            {/* Project card */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Project card
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  app/page.tsx · ProjectCard
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {/* Square with image */}
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-square w-full overflow-hidden bg-ink-100/70">
                    <Image
                      src="/projects/base-ui.png"
                      alt="Base UI design system"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                      Base UI
                    </p>
                    <p className="shrink-0 text-[14px] leading-[22px] text-ink-500">
                      2026
                    </p>
                  </div>
                  <p className="text-[14px] leading-[22px] text-ink-500">
                    Square aspect, with image
                  </p>
                </div>
                {/* Tall placeholder */}
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-[1/2] w-full overflow-hidden bg-ink-100/70" />
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                      Brand Bloom
                    </p>
                    <p className="shrink-0 text-[14px] leading-[22px] text-ink-500">
                      2026
                    </p>
                  </div>
                  <p className="text-[14px] leading-[22px] text-ink-500">
                    Tall aspect, placeholder
                  </p>
                </div>
                {/* Square placeholder */}
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-square w-full overflow-hidden bg-ink-100/70" />
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                      Untitled
                    </p>
                    <p className="shrink-0 text-[14px] leading-[22px] text-ink-500">
                      2026
                    </p>
                  </div>
                  <p className="text-[14px] leading-[22px] text-ink-500">
                    Square aspect, placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Nav link with arrow */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Nav link with arrow
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  app/page.tsx · sectionLinks
                </p>
              </div>
              <ul className="flex max-w-sm flex-col gap-3">
                {[
                  "01 PROJECTS",
                  "02 BLOGS",
                  "03 ABOUT ME",
                ].map((label) => (
                  <li key={label}>
                    <button
                      type="button"
                      className="group flex w-full items-center justify-between gap-3 text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      <span>{label}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] leading-[20px] text-ink-500">
                Hover lifts the arrow 2px right and shifts text to ember-700.
              </p>
            </div>

            {/* Contact link */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Contact link
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  app/page.tsx · contactLinks
                </p>
              </div>
              <ul className="flex max-w-sm flex-col gap-3">
                {["04 EMAIL", "05 RESUME", "06 LINKEDIN"].map((label) => (
                  <li key={label}>
                    <button
                      type="button"
                      className="text-[14px] font-medium leading-5 text-ink-900 transition-colors hover:text-ember-700"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section eyebrow */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Section eyebrow
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  text-eyebrow utility
                </p>
              </div>
              <span className="text-eyebrow uppercase text-ink-500">
                01 Featured work
              </span>
            </div>

            {/* Avatar / brand mark placeholder */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Brand mark placeholder
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  52×52 · bg-ink-100
                </p>
              </div>
              <div className="size-[52px] bg-ink-100" aria-hidden="true" />
            </div>

            {/* Divider */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink-100 pb-3">
                <h3 className="text-[13px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-ink-900">
                  Hairline divider
                </h3>
                <p className="font-mono text-[11px] leading-[16px] text-ink-500">
                  h-px · bg-ink-100
                </p>
              </div>
              <div className="h-px w-full bg-ink-100" />
            </div>
          </div>
        </Section>

        {/* States */}
        <Section
          id="states"
          index="05 States"
          title="Selection & focus"
          intro="Defined globally in app/globals.css base layer."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 border border-ink-100 p-6">
              <p className="text-eyebrow uppercase text-ink-500">
                Text selection
              </p>
              <p className="text-[15px] leading-[24px] text-ink-900">
                Try selecting{" "}
                <span className="bg-pink-100 text-ink-900">this phrase</span>{" "}
                — selection uses pink-100 on ink-900.
              </p>
              <p className="font-mono text-[11px] leading-[16px] text-ink-300">
                ::selection · bg pink-100 · color ink-900
              </p>
            </div>
            <div className="flex flex-col gap-3 border border-ink-100 p-6">
              <p className="text-eyebrow uppercase text-ink-500">
                Focus ring
              </p>
              <button
                type="button"
                className="w-fit rounded-sm bg-ink-900 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.15em] text-cream-50 focus-visible:outline-2 focus-visible:outline-ember-500 focus-visible:outline-offset-2"
              >
                Tab to focus
              </button>
              <p className="font-mono text-[11px] leading-[16px] text-ink-300">
                :focus-visible · 2px solid ember-500 · offset 2
              </p>
            </div>
          </div>
        </Section>

          <footer className="border-t border-ink-100 pt-8">
            <p className="text-[13px] leading-[20px] text-ink-500">
              Tokens defined in{" "}
              <span className="font-mono text-ink-900">app/globals.css</span>.
              See{" "}
              <span className="font-mono text-ink-900">CLAUDE.md</span> for the
              broader brand and content direction.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
