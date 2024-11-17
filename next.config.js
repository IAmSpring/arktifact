/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['iamspring.github.io']
  },
  basePath: process.env.NODE_ENV === 'production' ? '/arktifact' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/arktifact/' : '',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      },
    };
    return config;
  }
}

module.exports = nextConfig 