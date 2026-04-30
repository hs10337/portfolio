import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Belle`,
    description: project.tagline,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <Link
        href="/work"
        className="text-sm uppercase tracking-[0.16em] text-stone-500 hover:text-stone-800"
      >
        ← Work
      </Link>

      <header className="mt-10">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
          {project.role} · {project.year}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-stone-600">{project.tagline}</p>
      </header>

      <section className="mt-16 space-y-8 text-stone-700">
        <p className="text-base leading-relaxed">
          This is a placeholder for the {project.name} case study. Each project
          page is a hand-coded template, so layouts can flex per story.
        </p>
        <p className="text-base leading-relaxed">
          Replace this with the actual problem framing, process, key decisions,
          and final design moments — the kind of details a recruiter or design
          leader can scan quickly while still seeing real depth.
        </p>
      </section>
    </main>
  );
}
