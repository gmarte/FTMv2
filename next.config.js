/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ["cloud.appwrite.io"],
      remotePatterns: [
        {          
          hostname: 'www.pngwing.com',          
        },
      ],
    },
  }
