/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_API_MOCKING: 'disabled',
    AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY,
    NEXT_PUBLIC_VIDISPINE_URL: process.env.NEXT_PUBLIC_VIDISPINE_URL,
    EXTRACT_IMAGE_VIDEO_FUNCTION_URL:
      process.env.EXTRACT_IMAGE_VIDEO_FUNCTION_URL,
    MAM_ENVIRONMENT: process.env.MAM_ENVIRONMENT,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/download/:path*',
        destination: `${process.env.NEXT_PUBLIC_VIDISPINE_URL}/APInoauth/:path*`,
      },
      {
        source: '/functions/mam-extractimagefromvideo',
        destination: process.env.EXTRACT_IMAGE_VIDEO_FUNCTION_URL,
      },
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_VIDISPINE_URL}/API/:path*`,
      },
      {
        source: '/aje/news-packages/:path*',
        destination: '/items/:path*',
      },
      {
        source: '/dcs-video-library/:path*',
        destination: '/items/dcs-video-library/:path*',
      },
    ]
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
