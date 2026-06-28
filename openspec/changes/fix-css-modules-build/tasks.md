## 1. Build pipeline

- [x] 1.1 Add `scripts/build-bundle.mjs` with esbuild `local-css` loader for ESM/CJS bundles
- [x] 1.2 Add `tsup.dts.config.ts` for declarations-only pass
- [x] 1.3 Update `package.json` scripts, `main`, and `./styles.css` export

## 2. Component fixes

- [x] 2.1 Update `Card.module.css` — avoid clipping scrollable children (`overflow` / `min-width: 0` on body)
- [x] 2.2 Verify Table, Input, Select, Accordion render correctly with scoped classes (Storybook or manual)

## 3. Documentation

- [x] 3.1 Update `docs/getting-started.md` — import `@rabelo-digital/ds-rd/styles.css`
- [x] 3.2 Add CHANGELOG entry for v1.1.2

## 4. Release

- [x] 4.1 Bump version to 1.1.2
- [x] 4.2 Run `npm run build` and `npm test`
- [x] 4.3 Commit, tag `v1.1.2`, publish to npm

## 5. Consumer (site-rd-frontend)

- [x] 5.1 Upgrade `@rabelo-digital/ds-rd@1.1.2`
- [x] 5.2 Import `styles.css` in `_app.tsx`; remove `ds-components.css` and patch script
- [x] 5.3 Simplify `suporte-rd-marketing.css` — layout only, remove collision overrides
- [x] 5.4 Validate `/lp` and `/calculadora-roi` at mobile, tablet, desktop breakpoints
