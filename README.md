# @aws-rex/marketing-site

The Rex Staples marketing site and workspace splash page. It is a real Next.js app in its own
source repo and renders the shared `Header`/`Footer` from `@aws-rex/common-components`.

- **Repo:** `Rextasy-One/marketing-site`
- **Stack:** Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript 5
- **Depends on:** `@aws-rex/common-components` (`^1.0.0`)

## Pages

| Route        | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| `/`          | Workspace splash / marketing landing page            |
| `/resume`    | Resume page (stub — fill in real content)            |
| `/dashboard` | **Proxied** to the dashboard source repo (see below) |

## Proxying the dashboard

`next.config.ts` rewrites `/dashboard` (and any subpath) to `DASHBOARD_ORIGIN`, which defaults to
`http://localhost:3001`. This is why the shared header's `Dashboard` link is the relative
`/dashboard`: the browser only ever talks to the marketing origin, and no consumer needs to know
which port the dashboard runs on. Override with `DASHBOARD_ORIGIN` for other environments.

```bash
DASHBOARD_ORIGIN=https://dashboard.example.com pnpm dev
```

Both apps must be running for the proxy to resolve: `pnpm dev:dashboard` (3001) and
`pnpm dev:marketing` (3000).

`Dashboard` in the shared header links to `/dashboard`, which the marketing app proxies to the
dashboard source repo (see above), so the link resolves on the same origin.

## Develop

```bash
pnpm dev          # from here      → http://localhost:3000
pnpm dev:marketing  # from the workspace root
```

> Runs on port `3000`. The dashboard runs on `3001` and this app proxies `/dashboard` to it.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm format
```

## How it consumes the shared library

Same wiring as the dashboard: `transpilePackages` + `turbopack.root` in `next.config.ts`, and
`@source '../../../common-components/src'` in `src/app/globals.css` so Tailwind emits the classes used
inside the shared components.

## Tooling

ESLint, Prettier and TypeScript config come from
[`@aws-rex/config`](https://github.com/Rextasy-One/config) as a versioned dependency (`^1.0.0`).
