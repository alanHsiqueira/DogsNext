/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dogsapi.origamid.dev'
    }
  ]
};

export default nextConfig;
