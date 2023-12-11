/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental:{appDir: false},
  devIndicators: {
    autoPrerender: false,
  },
  generateEtags: false,
};

module.exports = nextConfig;
