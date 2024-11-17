const nextConfig = {
  output: 'export', // Ensures static HTML export
  images: {
    unoptimized: true, // Ensures images work in static export
  },
  basePath: '', // No base path since you're deploying to the root
  assetPrefix: '', // No asset prefix since you're not hosting under a subdirectory
  trailingSlash: true, // Adds trailing slashes for static paths
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false, // Disables Node.js 'fs' module
        path: false, // Disables Node.js 'path' module
      },
    };
    return config;
  },
  experimental: {
    metadataBase: new URL('https://arktifact.com'), // Resolves metadata warnings
  },
};

module.exports = nextConfig;
