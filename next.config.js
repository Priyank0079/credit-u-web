/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" }
    ]
  },
  // Disable powered-by header for security
  poweredByHeader: false,
  // Force CSS to be bundled inline with the page to prevent chunk loading failures
  experimental: {
    optimizeCss: false
  },
  // Production: ensure all CSS & JS chunks have proper cache headers
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    }
  ]
};

module.exports = nextConfig;
