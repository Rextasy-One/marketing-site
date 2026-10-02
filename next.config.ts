import path from 'node:path';
import type { NextConfig } from 'next';

// Source repos are independent git repositories nested inside the pnpm workspace, so
// Turbopack's automatic workspace-root detection stops at the repo boundary.
// Point it at the workspace root so it can resolve `next` and compile the
// shared component sources.
const workspaceRoot = path.resolve(import.meta.dirname, '../..');

/**
 * Origin of the dashboard source repo, used only by the HTTP dev fallback
 * (`pnpm dev:http`), which relies on these rewrites.
 *
 * `pnpm dev` does NOT use them: it runs a TLS terminator in front of both apps
 * (see scripts/tls-proxy.mjs) because Next's `rewrites()` fetches an HTTPS
 * destination with global `fetch`, which has no custom-CA hook and cannot carry
 * WebSocket upgrades for HMR.
 */
const dashboardOrigin = process.env.DASHBOARD_ORIGIN ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  // Compile the shared workspace library from source (no separate build step).
  transpilePackages: ['@aws-rex/common-components'],
  turbopack: {
    root: workspaceRoot,
  },
  /**
   * The shared header links to the relative `/dashboard`, so the marketing app
   * must answer that path. Keep it portable: the browser only ever talks to this
   * origin.
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
