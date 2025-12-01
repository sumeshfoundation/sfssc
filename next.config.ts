/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "colleges-india.com",
            }
        ]
    }
}

module.exports = nextConfig
