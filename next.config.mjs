/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  webpack: (config, { isServer }) => {

    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
      };
    }

    return config;
  }
};

export default nextConfig;
