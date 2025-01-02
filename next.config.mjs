/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "healthcareimpact.local",
      // },
      {
        protocol: "https",
        hostname: "hcimag.org",
      },
      // {
      //   protocol: "https",
      //   hostname:
      //     (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
      //       .replace(/^https?:\/\//, "")
      //       .replace(/\/$/, "") || "healthcareimpact.local",
      // },
      {
        protocol: "https",
        hostname:
          (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "") || "hcimag.org",
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
