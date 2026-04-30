import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export default async function Home() {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          Belle · Product Designer
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-stone-900 sm:text-6xl">
          Designing AI-native tools, design systems, and thoughtful digital
          experiences.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600">
          I work at the intersection of product strategy, systems, and craft —
          shaping how people move from browsing to acting inside the new
          generation of AI products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link
            href="/work"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-cream transition-colors hover:bg-stone-700"
          >
            See selected work
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-stone-800 transition-colors hover:border-stone-900"
          >
            Read writing
          </Link>
        </div>
      </section>

      <section className="border-t border-stone-200/60">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl text-stone-900">
              Featured work
            </h2>
            <Link
              href="/work"
              className="text-sm uppercase tracking-[0.16em] text-stone-500 hover:text-stone-900"
            >
              All work →
            </Link>
          </div>
          <ul className="space-y-12">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-2xl text-stone-900 transition-colors group-hover:text-stone-700">
                      {project.name}
                    </h3>
                    <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-stone-500">
                      {project.year}
                    </p>
                  </div>
                  <p className="mt-2 text-stone-600">{project.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="border-t border-stone-200/60">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-serif text-2xl text-stone-900">Writing</h2>
              <Link
                href="/blog"
                className="text-sm uppercase tracking-[0.16em] text-stone-500 hover:text-stone-900"
              >
                All posts →
              </Link>
            </div>
            <ul className="space-y-8">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block focus:outline-none"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h3 className="mt-2 font-serif text-xl text-stone-900 transition-colors group-hover:text-stone-700">
                      {post.title}
                    </h3>
                    {post.summary && (
                      <p className="mt-1 text-stone-600">{post.summary}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
