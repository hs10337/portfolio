import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@keystatic/core"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
