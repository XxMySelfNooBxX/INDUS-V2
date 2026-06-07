import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
    'ddgef-103-59-75-253.run.pinggy-free.link',
    'sad-bottles-post.loca.lt'
  ]
};

export default nextConfig;
