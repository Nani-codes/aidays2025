/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: process.env.NEXT_IMAGE_DOMAIN.split(','),
  },
  experimental: {
    scrollRestoration: true,
  }
}

module.exports = nextConfig
