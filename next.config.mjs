const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  assetPrefix: isProd ? "https://mspensieri.github.io/survivor-46" : undefined,
};

export default nextConfig;
