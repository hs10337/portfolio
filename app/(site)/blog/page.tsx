import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Writing — Belle",
  description: "Notes on product design, AI, and the craft of building.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <header className="mb-16">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          Writing
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          Notes on design, AI, and the craft of building.
        </h1>
      </header>

      {posts.length === 0 ? (
        <p className="text-stone-600">
          No posts yet. Add one in the{" "}
          <Link href="/keystatic" className="underline underline-offset-4">
            Keystatic admin
          </Link>
          .
        </p>
      ) : (
        <ul className="divide-y divide-stone-200">
          {posts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group block focus:outline-none"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                  {formatDate(post.publishedAt)}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-stone-900 transition-colors group-hover:text-stone-700 group-focus-visible:text-stone-700">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="mt-2 text-stone-600">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
