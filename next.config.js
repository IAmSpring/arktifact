const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['iamspring.github.io']
  },
  basePath: '',
  assetPrefix: '',
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
};

module.exports = nextConfig;
