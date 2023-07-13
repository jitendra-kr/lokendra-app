module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.experiments = { asyncWebAssembly: true };

    return config;
  },
};
