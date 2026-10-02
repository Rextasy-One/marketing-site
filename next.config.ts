import fs from 'node:fs';
import path from 'node:path';
import type { NextConfig } from 'next';

// Source repos are independent git repositories nested inside the pnpm workspace, so
// Turbopack's automatic workspace-root detection stops at the repo boundary.
// Point it at the workspace root so it can resolve `next` and compile the
// shared component sources.
const workspaceRoot = path.resolve(import.meta.dirname, '../..');

/**
 * Origin of the dashboard source repo. Development uses its own dev server over
 * HTTPS; production would be the dashboard's deployed origin. Keep it in one
 * place so nothing else has to know how the dashboard is hosted.
 */
const dashboardOrigin = process.env.DASHBOARD_ORIGIN ?? 'https://localhost:3001';

/**
 * mkcert issues the dashboard's dev certificate, which Node does not trust from
 * the system store. Node 24 (undici) honours NODE_EXTRA_CA_CERTS at the process
 * level; this reads it purely to fail loudly when it is missing, rather than
 * surfacing an opaque `fetch failed` from the proxy.
 */
const caPath = process.env.NODE_EXTRA_CA_CERTS;

if (dashboardOrigin.startsWith('https://') && (!caPath || !fs.existsSync(caPath))) {
  console.warn(
    '[marketing-site] Proxying to an HTTPS origin without NODE_EXTRA_CA_CERTS.\n' +
      '  The proxy will reject the dashboard certificate. Run `pnpm dev` from the\n' +
      '  workspace root, which sets this to the mkcert CA.',
  );
}

const nextConfig: NextConfig = {
  // Compile the shared workspace library from source (no separate build step).
  transpilePackages: ['@aws-rex/common-components'],
  turbopack: {
    root: workspaceRoot,
  },
  /**
   * The shared header links to the relative `/dashboard`. Proxying it here keeps
   * that link portable: the browser only ever talks to this origin.
   *
   * NOTE: Next's own `rewrites()` does not expose TLS options for an HTTPS
   * destination, so in that case a dedicated TLS terminator in front of both apps
   * handles it instead (see `scripts/dev.mjs` and `docs/TOOLING.md`).
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
