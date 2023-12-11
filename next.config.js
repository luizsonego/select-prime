/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  experimental:{appDir: false},
  devIndicators: {
    autoPrerender: false,
  },
  generateEtags: false,
};

module.exports = nextConfig;
