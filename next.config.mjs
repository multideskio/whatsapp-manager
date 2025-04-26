/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/api/v1',
        destination: '/api/docs',
        permanent: true,
      },
    ]
  },
  // Adiciona configuração para permitir scripts de CDN
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.redoc.ly; style-src 'self' 'unsafe-inline' https://cdn.redoc.ly; img-src 'self' data:; font-src 'self' data:;"
          }
        ]
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
