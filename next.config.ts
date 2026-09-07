import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = "/huella-germana-nueva-york";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
        // The Pages build does not execute the Cloudflare-only worker/database files.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
