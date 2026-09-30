import path from 'node:path';
import type { NextConfig } from 'next';

// Source repos are independent git repositories nested inside the pnpm workspace, so
// Turbopack's automatic workspace-root detection stops at the repo boundary.
// Point it at the workspace root so it can resolve `next` and compile the
// shared component sources.
const workspaceRoot = path.resolve(import.meta.dirname, '../..');

// Origin of the dashboard source repo. In development this is its own dev server;
// in production it would be the dashboard's deployed origin. Keep it in one place
// so nothing else has to know which port the dashboard runs on.
const dashboardOrigin = process.env.DASHBOARD_ORIGIN ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  // Compile the shared workspace library from source (no separate build step).
  transpilePackages: ['@aws-rex/common-components'],
  turbopack: {
    root: workspaceRoot,
  },
  /**
   * The shared header links to the relative `/dashboard`. Proxying it here keeps
   * that link portable: the browser only ever talks to the marketing origin.
   */
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: `${dashboardOrigin}/dashboard`,
      },
      {
        source: '/dashboard/:path*',
        destination: `${dashboardOrigin}/dashboard/:path*`,
      },
    ];
  },
};

export default nextConfig;
