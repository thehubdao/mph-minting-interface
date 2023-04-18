/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{MPH_CONTRACT_ADDRESS:process.env.MPH_CONTRACT_ADDRESS},
  swcMinify:false
}

module.exports = nextConfig
