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
    title: `${post.title} — Belle`,
    description: post.summary,
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post || post.draft) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <Link
        href="/blog"
        className="text-sm uppercase tracking-[0.16em] text-stone-500 hover:text-stone-800"
      >
        ← Writing
      </Link>

      <header className="mt-10">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
          {formatDate(post.publishedAt)}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 text-lg text-stone-600">{post.summary}</p>
        )}
      </header>

      <article className="prose prose-stone mt-12 max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-2xl prose-a:text-stone-900 prose-a:underline-offset-4 prose-img:rounded-lg">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  );
}
