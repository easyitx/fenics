import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
