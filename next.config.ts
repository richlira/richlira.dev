import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/community",
        destination: "/community/claude-code-meetups",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
