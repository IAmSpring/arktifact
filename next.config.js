const nextConfig = {
  output: 'export', // Generate static export for GitHub Pages
  images: {
    unoptimized: true,
  },
  basePath: '', // No base path since you're deploying to the root
  assetPrefix: '', // No asset prefix needed for custom domain
  trailingSlash: true, // Ensure trailing slashes for all routes
  experimental: {
    metadataBase: new URL('https://arktifact.com'), // Fix for Open Graph and Twitter metadata warnings
  },
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
  },
};

module.exports = nextConfig;
