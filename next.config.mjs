const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = isProd
  ? {
      output: "export",
      distDir: "docs",
    }
  : {};

export default nextConfig;
