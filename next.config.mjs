// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '512pixels.net',
                port: '',
                pathname:
                    '/downloads/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg',
            },
        ],
    },
};

export default nextConfig;
