import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...rest }) => {
    const isInternal = typeof href === "string" && href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, width, height, ...rest }) => {
    if (typeof src !== "string") return null;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={Number(width) || 1600}
        height={Number(height) || 900}
        sizes="(min-width: 768px) 672px, 100vw"
        {...(rest as Omit<ImageProps, "src" | "alt" | "width" | "height">)}
      />
    );
  },
};
