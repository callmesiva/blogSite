/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wolviosolution.wpcomstaging.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "wolviosolutions.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
