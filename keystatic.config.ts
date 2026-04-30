import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "Belle's Portfolio" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "URL slug",
            description: "Used in the post URL.",
          },
        }),
        publishedAt: fields.date({
          label: "Published",
          defaultValue: { kind: "today" },
        }),
        summary: fields.text({
          label: "Summary",
          description: "One or two sentence preview shown on the index.",
          multiline: true,
          validation: { length: { max: 280 } },
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Hide this post from the public site.",
          defaultValue: false,
        }),
        heroImage: fields.image({
          label: "Hero image",
          directory: "public/images/posts",
          publicPath: "/images/posts/",
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tags",
            itemLabel: (props) => props.value,
          },
        ),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/images/posts",
              publicPath: "/images/posts/",
            },
          },
        }),
      },
    }),
  },
});
