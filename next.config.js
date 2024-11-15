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
}

module.exports = nextConfig 