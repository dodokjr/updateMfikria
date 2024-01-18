/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers()
    {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
                    }
                ],
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
