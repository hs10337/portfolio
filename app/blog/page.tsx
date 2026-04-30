import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Writing — Belle Lee",
  description: "Notes on product design, AI, and the craft of building.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-10 py-section md:py-section-lg">
      <header className="mb-16 md:mb-20">
        <p className="text-eyebrow font-sans uppercase text-ink-500 mb-6">
          Writing
        </p>
        <h1 className="font-serif text-display text-ink-900">
          <span className="italic">Notes</span> on design, AI, and the craft of
          building.
        </h1>
      </header>

      {posts.length === 0 ? (
        <p className="text-ink-700">
          No posts yet. Add one in the{" "}
          <Link
            href="/keystatic"
            className="underline decoration-ember-500/60 underline-offset-4 hover:decoration-ember-500"
          >
            Keystatic admin
          </Link>
          .
        </p>
      ) : (
        <ul className="divide-y divide-ink-100/60">
          {posts.map((post) => (
            <li key={post.slug} className="py-10 first:pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-50 rounded-md"
              >
                <p className="text-eyebrow font-sans uppercase text-ink-300">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl text-ink-900 transition-colors group-hover:text-ink-700">
                  {post.title}
                </h2>
                {post.blurb && (
                  <p className="mt-3 text-ink-700 leading-relaxed">
                    {post.blurb}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
