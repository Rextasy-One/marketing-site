# @aws-rex/marketing-site

The Aws Rex marketing site. Intended as a static site that consumes
`@aws-rex/common-components`, exercising cross-pod inter-dependency from a non-Next frontend.

- **Repo:** `Rextasy-One/marketing-site`
- **Stack:** static site (pipeline TBD)
- **Depends on:** `@aws-rex/common-components` (`workspace:*`)

## Status

Placeholder. The package is wired into the workspace and depends on the shared components
(`src/index.js` is a stub), but the static build pipeline and the rendered pages are not built yet.

## Scripts

```bash
pnpm lint
pnpm format
```

## Tooling

ESLint and Prettier config come from
[`@aws-rex/config`](https://github.com/Rextasy-One/config) as a versioned dependency (`^1.0.0`).

## Roadmap

Adopt a static build (Vite or Next static export) that renders the shared `Header`/`Footer`, proving
the inter-dependency. Tracked in the workspace [`docs/ROADMAP.md`](../../docs/ROADMAP.md).
