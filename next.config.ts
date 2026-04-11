import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.files.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "**.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
