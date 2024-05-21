/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: false,
  // },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
