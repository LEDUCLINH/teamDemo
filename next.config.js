const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env['ANALYZE'] === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,

  images: {
    domains: [
      ...(process.env['NEXT_PUBLIC_BASE_URL']
        ? [new URL(process.env['NEXT_PUBLIC_BASE_URL']).hostname]
        : []),
      ...(process.env['SPACES_ENDPOINT']
        ? [process.env['SPACES_ENDPOINT']]
        : []),
      ...(process.env['SPACES_CDN_BASE_URL']
        ? [new URL(process.env['SPACES_CDN_BASE_URL']).hostname]
        : []),
      `avatars.dicebear.com`,
    ],
  },
})
