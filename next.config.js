/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for static export
  trailingSlash: true,
  // Configure static API routes
  async rewrites() {
    return [
      {
        source: '/api/episode-files',
        destination: '/api/episode-files.json',
      },
    ];
  },
}

module.exports = nextConfig 