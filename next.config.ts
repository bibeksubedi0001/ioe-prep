import type {NextConfig} from 'next';
import path from 'path';

// Set to true when building for GitHub Pages deployment
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Prevents Next.js from traversing parent directories for workspace root
  outputFileTracingRoot: path.join(__dirname),

  // GitHub Pages static export (only when building for deployment)
  ...(isGithubPages && {
    basePath: '/ioe-prep',
    output: 'export',
    trailingSlash: true, // generates page/index.html so GH Pages serves nested routes
  }),

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;