
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['swiper', 'swiper/react', 'swiper/modules'],
  
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ecommerce.routemisr.com" },
    ],
  },
};

export default nextConfig;
