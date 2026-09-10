/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/cannon",
    "@react-three/postprocessing",
    "@pmndrs/cannon-worker-api",
    "n8ao",
    "postprocessing",
  ],
}

module.exports = nextConfig
