/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.experiments = { asyncWebAssembly: true, layers: true };

    return config;
  },
};

export default nextConfig;
