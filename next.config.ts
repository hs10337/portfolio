import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  transpilePackages: ["@keystatic/core"],
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  async rewrites() {
    return [
      { source: "/projects", destination: "/projects/index.html" },
      { source: "/idiom", destination: "/idiom/index.html" },
      { source: "/base-ui/:slug", destination: "/base-ui/:slug/index.html" },
    ];
  },
};

export default nextConfig;
