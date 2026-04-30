import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostStatus = "draft" | "published";

export type PostFrontmatter = {
  title: string;
  status: PostStatus;
  date: string;
  blurb: string;
  image?: string;
  categories?: string[];
  notionLink?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

async function readDirSafe(dir: string) {
  try {
    return await fs.readdir(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

function parseFile(slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;
  return {
    slug,
    title: fm.title ?? slug,
    status: fm.status === "published" ? "published" : "draft",
    date: fm.date ?? "",
    blurb: fm.blurb ?? "",
    image: fm.image,
    categories: fm.categories,
    notionLink: fm.notionLink,
    content,
  };
}

export async function getAllPosts(opts?: {
  includeDrafts?: boolean;
}): Promise<PostMeta[]> {
  const files = await readDirSafe(POSTS_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
        const { content: _content, ...meta } = parseFile(slug, raw);
        return meta;
      }),
  );

  return posts
    .filter((p) => opts?.includeDrafts || p.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
    return parseFile(slug, raw);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts({ includeDrafts: true });
  return posts.map((p) => p.slug);
}
