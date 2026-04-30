import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { mdxComponents } from "@/components/mdx-components";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Belle Lee`,
    description: post.blurb,
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post || post.status !== "published") notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-10 py-section md:py-section-lg">
      <Link
        href="/blog"
        className="text-eyebrow font-sans uppercase text-ink-500 hover:text-ink-900 transition-colors"
      >
        ← Writing
      </Link>

      <header className="mt-12">
        <p className="text-eyebrow font-sans uppercase text-ink-300">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-4 font-serif text-display text-ink-900">
          {post.title}
        </h1>
        {post.blurb && (
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-700">
            {post.blurb}
          </p>
        )}
      </header>

      <article
        className="
          prose mt-16 max-w-none
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink-900
          prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-2xl
          prose-p:text-ink-700 prose-p:leading-relaxed
          prose-a:text-ink-900 prose-a:underline prose-a:decoration-ember-500/60 prose-a:underline-offset-4 hover:prose-a:decoration-ember-500
          prose-strong:text-ink-900
          prose-blockquote:border-l-ember-300 prose-blockquote:text-ink-700
          prose-code:text-ink-900
          prose-img:rounded-xl prose-img:ring-1 prose-img:ring-ink-100/60
          prose-li:text-ink-700
        "
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  );
}
