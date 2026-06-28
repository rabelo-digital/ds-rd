## Context

CSS Modules in source (e.g. `Button.module.css`) are imported as `import styles from './Button.module.css'`. tsup v8 with default settings bundles JS but emits `{}` for CSS module imports and flattens CSS into `dist/index.css` using short local names (`.button`, `.md`, `.content`), causing collisions across Button, Badge, Modal, Accordion, Select, Table, Input, and Avatar.

Consumers (site-rd-frontend) worked around this with a postinstall patch script and hundreds of lines of scoped overrides—fragile and incomplete.

## Goals / Non-Goals

**Goals:**

- Every published component receives a non-empty CSS module class map at runtime.
- Aggregated stylesheet uses component-prefixed selectors (`Button_button`, `Select_content`, `Table_td`) with zero cross-component collisions.
- Expose `./styles.css` export for one-line consumer setup.
- Keep ESM + CJS + `.d.ts` outputs; all existing Vitest tests pass without changes to component source.

**Non-Goals:**

- Migrating from CSS Modules to another styling solution.
- Changing component props or visual design tokens.
- Storybook build changes beyond verifying stories still render.

## Decisions

### 1. esbuild `local-css` for JS/CSS bundles

**Choice:** `scripts/build-bundle.mjs` runs esbuild with `loader: { '.css': 'local-css' }` for `src/index.ts` and `src/tokens/index.ts`.

**Rationale:** Verified locally—esbuild scopes classes as `{ComponentName}_{localName}` and injects correct maps into JS. tsup does not support this loader reliably in v8.5.1.

**Alternatives considered:**

- `esbuild-css-modules-plugin` with tsup — still produced empty maps in practice.
- Post-build patch in consumers — rejected; fix belongs in the design system.

### 2. tsup DTS-only pass

**Choice:** `tsup --config tsup.dts.config.ts` generates `.d.ts` only after the esbuild bundle.

**Rationale:** Separates concerns; esbuild handles runtime, tsup handles declaration merging from source.

### 3. Package exports

**Choice:**

```json
"exports": {
  ".": { "import": "./dist/index.mjs", "require": "./dist/index.js" },
  "./styles.css": "./dist/index.css",
  "./tokens.css": "./tokens.css"
}
```

**Rationale:** Explicit stylesheet path; avoids consumers copying `dist/index.css` manually.

## Risks / Trade-offs

- **[Risk] Storybook may use a different bundler path** → Verify Storybook 8 still resolves CSS Modules via Vite; no change expected for dev/docs.
- **[Risk] Bundle size slightly larger due to prefixed class names** → Acceptable; correctness over bytes.
- **[Risk] Consumers must add stylesheet import** → Document in getting-started; patch release note in CHANGELOG.

## Migration Plan

1. Publish `@rabelo-digital/ds-rd@1.1.2`.
2. Consumers: `npm install @rabelo-digital/ds-rd@1.1.2`, add `@import "@rabelo-digital/ds-rd/styles.css"` (or equivalent), remove local CSS patch scripts and collision overrides.
3. Rollback: pin previous version `1.1.1` if unforeseen bundler incompatibility.

## Open Questions

- None for this patch; ADR documenting build split can follow in a separate docs PR if desired.
