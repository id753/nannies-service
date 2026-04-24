import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true, // Рекомендуется для бесплатного хостинга
  },
};

export default nextConfig;
