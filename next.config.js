/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/arktifact' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/arktifact/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 