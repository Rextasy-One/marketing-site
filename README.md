# @aws-rex/marketing-site

The Rex Staples marketing site and workspace splash page. It is a real Next.js app in its own
source repo and renders the shared `Header`/`Footer` from `@aws-rex/common-components`.

- **Repo:** `Rextasy-One/marketing-site`
- **Stack:** Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript 5
- **Depends on:** `@aws-rex/common-components` (`^1.0.0`)

## Pages

| Route     | Purpose                                   |
| --------- | ----------------------------------------- |
| `/`       | Workspace splash / marketing landing page |
| `/resume` | Resume page (stub — fill in real content) |

`Dashboard` in the shared header links to `/dashboard`, which is not served by this app (it lives
in the `dashboard` source repo). Point that route at the dashboard deployment when there is one.

## Develop

```bash
pnpm dev          # from here      → http://localhost:3001
pnpm dev:marketing  # from the workspace root
```

> Uses port `3001` so it can run alongside the dashboard (`3000`).

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
