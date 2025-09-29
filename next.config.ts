import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
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
