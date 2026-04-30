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
      columns: ["status", "date", "blurb", "notionLink"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "Slug",
            description: "bellelee.me/blog/",
          },
        }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        }),
        date: fields.date({
          label: "Date",
          defaultValue: { kind: "today" },
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/posts",
          publicPath: "/images/posts/",
        }),
        categories: fields.array(
          fields.text({ label: "Category" }),
          {
            label: "Categories",
            itemLabel: (props) => props.value,
          },
        ),
        blurb: fields.text({
          label: "Blurb",
          description: "One or two sentence preview shown on the index.",
          multiline: true,
          validation: { length: { max: 280 } },
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/images/posts",
              publicPath: "/images/posts/",
            },
          },
        }),
        notionLink: fields.url({
          label: "Notion Link",
          description: "Optional source page or URL.",
        }),
      },
    }),
  },
});
