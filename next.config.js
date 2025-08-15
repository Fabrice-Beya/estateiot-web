/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // No assetPrefix or basePath needed since you're using a custom domain
}

module.exports = nextConfig
