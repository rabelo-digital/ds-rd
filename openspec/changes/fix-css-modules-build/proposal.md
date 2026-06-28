## Why

The published bundle (v1.1.1) emits CSS Modules as empty objects and concatenates unscoped class names (`.primary`, `.md`, `.content`, `.body`) into a single global stylesheet. Consumers that import component styles see cross-component collisions—broken Select positioning, clipped Table cells, mis-sized Inputs, and Accordion content rendered as fixed overlays.

## What Changes

- Replace tsup-only bundling with an esbuild pipeline using `local-css` so each component receives scoped class maps (e.g. `Button_button`, `Table_td`).
- Emit a single distributable stylesheet at `@rabelo-digital/ds-rd/styles.css` (mapped to `dist/index.css`).
- Split type generation into a dedicated tsup DTS pass; JS bundles via `scripts/build-bundle.mjs`.
- Update `docs/getting-started.md` with required stylesheet import for consumers.
- Release **v1.1.2** patch on npm.

## Capabilities

### New Capabilities

- `css-modules-build`: Build pipeline and package exports that guarantee scoped CSS Modules and a documented global stylesheet entry point.

### Modified Capabilities

- _(none — no existing OpenSpec baseline specs in this repository)_

## Impact

- **Build**: `package.json` scripts, new `scripts/build-bundle.mjs`, `tsup.dts.config.ts`; legacy `tsup.config.ts` no longer used for JS/CSS output.
- **Consumers**: Must import `@rabelo-digital/ds-rd/styles.css` once (alongside `tokens.css`); can remove local CSS patch workarounds.
- **Breaking**: None for JS/React APIs; behavioral fix only. Consumers relying on accidental global class names (`.button.primary`) would break—those were never part of the public API.
