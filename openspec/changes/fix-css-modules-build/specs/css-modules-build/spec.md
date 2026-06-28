## ADDED Requirements

### Requirement: Scoped CSS module class maps in published bundles

The build pipeline SHALL emit non-empty CSS module class maps for every component that imports a `*.module.css` file, so runtime `styles.*` references resolve to scoped class strings.

#### Scenario: Button module map is populated

- **WHEN** a consumer imports `Button` from `@rabelo-digital/ds-rd` and renders `<Button variant="primary">`
- **THEN** the rendered element includes scoped classes prefixed with `Button_` (e.g. `Button_button`, `Button_primary`)

#### Scenario: Table cells receive padding classes

- **WHEN** a consumer renders `<Table>` with header and body rows
- **THEN** `th` and `td` elements use scoped `Table_th` and `Table_td` classes with correct padding and borders

### Requirement: No global class name collisions in aggregated stylesheet

The published aggregated stylesheet SHALL NOT contain duplicate unscoped utility class names shared across components (e.g. a single global `.content` or `.md` rule affecting multiple components).

#### Scenario: Accordion content is not position-fixed

- **WHEN** Accordion and Modal styles are both loaded via `@rabelo-digital/ds-rd/styles.css`
- **THEN** Accordion panel content uses `Accordion_content` positioning and is not affected by Modal overlay rules

#### Scenario: Select dropdown anchors to trigger

- **WHEN** a Select is opened inside a positioned container
- **THEN** the dropdown portal content uses `Select_content` classes and renders adjacent to the trigger without horizontal offset errors from unrelated `.content` rules

### Requirement: Documented stylesheet export

The package SHALL expose a `./styles.css` export pointing to the built component stylesheet, and getting-started documentation SHALL instruct consumers to import it alongside `tokens.css`.

#### Scenario: Consumer imports styles via package export

- **WHEN** a consumer adds `@import "@rabelo-digital/ds-rd/styles.css"` to their global CSS
- **THEN** all DS components render with intended layout without additional patch scripts

### Requirement: Build outputs remain dual-format with types

The package SHALL continue to publish ESM (`dist/index.mjs`), CJS (`dist/index.js`), and TypeScript declarations (`dist/index.d.ts`) produced by the updated pipeline.

#### Scenario: ESM and CJS entrypoints resolve

- **WHEN** a consumer imports via `import` or `require`
- **THEN** both entrypoints resolve to bundles with identical component exports and scoped CSS behavior
