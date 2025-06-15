/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // 🔥 ESLint 에러 무시하고 빌드 계속
  },
};

export default nextConfig;
