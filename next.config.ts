import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.csfade.gg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.csgoskins.gg",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
