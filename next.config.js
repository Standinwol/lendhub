/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify')
      };
    }
    return config;
  },
  env: {
    INFURA_SEPOLIA_API_URL: process.env.INFURA_SEPOLIA_API_URL || 'https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25',
    NEXT_PUBLIC_INFURA_SEPOLIA_API_URL: process.env.NEXT_PUBLIC_INFURA_SEPOLIA_API_URL || 'https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25'
  }
}
