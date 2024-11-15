/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['arktifact.com']
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig 