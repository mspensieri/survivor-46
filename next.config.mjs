const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = isGithubActions
  ? {
      output: "export",
      distDir: "docs",
      assetPrefix: assetPrefix,
      basePath: basePath,
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "static.wikia.nocookie.net",
          },
        ],
      },
    }
  : {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "static.wikia.nocookie.net",
          },
        ],
      },
    };

export default nextConfig;
