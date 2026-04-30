export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  tags: string[];
  hero?: string;
  status?: "live" | "concept";
};

export const projects: Project[] = [
  {
    slug: "neo",
    name: "Neo",
    tagline:
      "An AI-native browser that turns the page into an active surface for getting things done.",
    role: "Product Design Lead",
    year: "2024–2026",
    tags: ["AI UX", "Design Systems", "Product Strategy"],
    status: "live",
  },
  {
    slug: "bloom",
    name: "Bloom",
    tagline:
      "An AI brand and content assistant for restaurants, bakeries, and small creative businesses.",
    role: "Product Designer",
    year: "2025",
    tags: ["Consumer AI", "0→1 Concept"],
    status: "concept",
  },
  {
    slug: "momento",
    name: "Momento",
    tagline:
      "A reflective journal for parents — gentle AI for memory, milestones, and the long arc of raising a small human.",
    role: "Product Designer",
    year: "2025",
    tags: ["Consumer AI", "0→1 Concept"],
    status: "concept",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
