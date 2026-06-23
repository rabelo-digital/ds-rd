# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/rabelo-digital/ds-rd/compare/v1.1.0...v1.1.1) (2026-06-23)

### Features

- **DS:** release ([be074d9](https://github.com/rabelo-digital/ds-rd/commit/be074d9cf1a1bb5b55d870099c93176ef40d4a42))

### Bug Fixes

- **ci:** install Playwright browser for Storybook a11y tests ([7db1782](https://github.com/rabelo-digital/ds-rd/commit/7db17825ad3dbdcc869a7b133d2ca30f65890e79))
- **storybook:** exclude mdx stories from CI indexer ([c948ef4](https://github.com/rabelo-digital/ds-rd/commit/c948ef4a372722a40b8b69b85ac864a8d4eeb7c7))

## 1.1.0

### Minor Changes

- Migrate package manager from pnpm to npm (CI, scripts, lockfile)
- Align component APIs and token usage across atoms and molecules
- Fix lint regressions (SocialIcons, Toast) and Tabs interaction test
- Add OpenSpec project context referencing `docs/` as source of truth

## 1.0.0

### Minor Changes

Initial release of the Rabelo Digital Design System.

**Design Tokens**

- Primitive and semantic color scales (brand blue `#02548B`, teal `#16B597`, orange `#FF3C00`)
- Spacing scale (4px base grid), typography, radii, elevation, z-index, motion, breakpoints
- `tokens.css` with all CSS custom properties for `:root`

**Atom Components**

- `Button` — 4 variants, 3 sizes, loading state, forwardRef
- `Input` — label, error, helperText, sizes, forwardRef
- `Textarea` — label, error, live character counter
- `Badge` — 6 variants, 2 sizes
- `Avatar` — image or name initials, 5 sizes, circle/square
- `Checkbox` — indeterminate state (Radix UI)
- `RadioGroup` — options array, horizontal/vertical (Radix UI)
- `Select` — label, placeholder, error, sizes, portal (Radix UI)
- `Tooltip` — content, side, delay (Radix UI)
- `SocialIcons` — LinkedIn/Instagram/GitHub/X/Facebook/YouTube/WhatsApp unified

**Molecule Components**

- `Card` — compound pattern (Card.Header/Body/Footer)
- `Modal` — focus-trapped, 5 sizes (Radix UI Dialog)
- `Drawer` — slide-in, 4 sides (Radix UI Dialog)
- `Tabs` — roving tabindex (Radix UI)
- `Accordion` — single/multiple mode (Radix UI)
- `Toast` + `useToast` — 5 variants, auto-dismiss (Radix UI)
- `Table` — compound (Head/Body/Row/Cell), sticky header

**Accessibility:** WCAG 2.1 AA via Radix UI primitives across all interactive components.
