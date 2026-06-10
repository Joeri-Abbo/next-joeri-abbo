/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    reactStrictMode: true,

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/random/**',
            },
        ],
    },
}

module.exports = nextConfig
