import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Belle",
  description: "Selected product design work, AI projects, and concepts.",
};

export default function WorkIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          Selected work
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          Product design across AI tools, design systems, and quiet consumer
          experiments.
        </h1>
      </header>

      <ul className="space-y-16">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group block focus:outline-none"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="font-serif text-3xl text-stone-900 transition-colors group-hover:text-stone-700 group-focus-visible:text-stone-700">
                  {project.name}
                </h2>
                <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-stone-500">
                  {project.year}
                </p>
              </div>
              <p className="mt-3 text-lg text-stone-600">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-[0.12em] text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
                {project.status === "concept" && (
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-orange-700">
                    Concept
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
