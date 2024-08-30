/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.dog.ceo',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            port: '',
          },
        ],
      },
};

export default nextConfig;
