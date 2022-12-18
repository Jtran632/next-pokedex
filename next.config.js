/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["veekun.com", "projectpokemon.org"],
  },
};

module.exports = nextConfig;
