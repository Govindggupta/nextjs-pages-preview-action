import type { NextConfig } from "next";

const isPRPreview = process.env.BASE_PATH !== undefined;
const basePath = isPRPreview
  ? process.env.BASE_PATH
  : "/pr-preview-test";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath + "/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;