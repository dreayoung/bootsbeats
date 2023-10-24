/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.redd.it',
      'images.nightcafe.studio',
      'cdn.ebaumsworld.com',
      'www.diplo.co.uk',
      'i.kym-cdn.com',
    ],
  },
};

module.exports = nextConfig;
