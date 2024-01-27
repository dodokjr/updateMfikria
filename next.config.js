/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers()
    {
        return [
            {
                source: '/(.*)?',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    }
                ],
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com"
            },
            {
                hostname: "scontent-cgk1-2.cdninstagram.com"
            }
        ]
    }
}

module.exports = nextConfig
