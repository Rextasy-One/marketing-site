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

/**
 * The dashboard is mounted at this prefix, so the whole site lives on one origin
 * with no CORS. Registered in one place because Next refuses a `basePath` that
 * contains another one; if routing ever gets deeper, drop `basePath` and let this
 * proxy own the whole prefix.
 */
export const DASHBOARD_PREFIX = '/dashboard';

const nextConfig: NextConfig = {
  // Compile the shared workspace library from source (no separate build step).
  transpilePackages: ['@aws-rex/common-components'],
  turbopack: {
    root: workspaceRoot,
  },
  /**
   * `next.config.ts` cannot import a variable from another module into this
   * object literal reliably across builds, so the prefix is inlined above and
   * used directly here.
   */
  async rewrites() {
    return [
      {
        source: `${DASHBOARD_PREFIX}`,
        destination: `${dashboardOrigin}${DASHBOARD_PREFIX}`,
      },
      {
        source: `${DASHBOARD_PREFIX}/:path*`,
        destination: `${dashboardOrigin}${DASHBOARD_PREFIX}/:path*`,
      },
    ];
  },
};

export default nextConfig;
