import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Case studies moved from /projects/[slug]; keep old shared links working.
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
