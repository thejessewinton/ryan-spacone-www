import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
      },
    ],
    unoptimized: true,
    qualities: [90, 75],
  },
  redirects: async () => {
    return [
      {
        source: '/admin',
        destination: 'https://ryan-spacone.prismic.io',
        permanent: false,
      },
    ]
  },
}
export default config
