/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "healthcareimpact.local",
      },
      {
        protocol: "https",
        hostname: "hcimpactmag.com",
      },
      {
        protocol: "https",
        hostname: "www.hcimpactmag.com",
      },
      {
        protocol: "https",
        hostname:
          (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "") || "healthcareimpact.local",
      },
      {
        protocol: "https",
        hostname:
          (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "") || "hcimpactmag.com",
      },

      {
        protocol: "https",
        hostname: "0.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "1.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "2.gravatar.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/wp-json/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/:path*`,
      },
      {
        source: "/wp-content/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-content/:path*`,
      },
      {
        source: "/api/articles",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`,
      },
      {
        source: "/api/articles/:id",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/:id`,
      },
    ];
  },
};

export default nextConfig;
