/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
}

module.exports = nextConfig
