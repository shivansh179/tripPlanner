import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.cloud.google.com', 'storage.googleapis.com','media.istockphoto.com','images.unsplash.com','images.pexels.com','plus.unsplash.com'],
  },
};

export default nextConfig;
