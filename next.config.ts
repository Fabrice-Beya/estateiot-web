import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Disable server-side features for static export
  reactStrictMode: true,
  
  // Ensure no server-side rendering
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;
