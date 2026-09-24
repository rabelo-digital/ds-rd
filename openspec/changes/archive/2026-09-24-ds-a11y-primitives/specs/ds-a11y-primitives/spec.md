## ADDED Requirements

### Requirement: Accent color tokens meet WCAG AA with on-accent text

The semantic `accent.default` background paired with `accent.on` text SHALL meet a minimum contrast ratio of 4.5:1.

#### Scenario: Accent button contrast passes AA

- **WHEN** checking contrast of `accent.on` on `accent.default`
- **THEN** the ratio SHALL be ≥ 4.5:1

---

### Requirement: IconButton atom provides accessible icon-only controls

The design system SHALL export an `IconButton` component that requires `aria-label` and uses a native `<button>`.

#### Scenario: IconButton announces its action

- **WHEN** an IconButton with `aria-label="Fechar"` is rendered
- **THEN** assistive technologies SHALL announce "Fechar"

---

### Requirement: SkipLink atom enables skip navigation

The design system SHALL export a `SkipLink` component targeting `#main-content` by default.

#### Scenario: SkipLink is focusable

- **WHEN** a keyboard user tabs into the page
- **THEN** the SkipLink SHALL be the first focusable element when placed first in DOM order

---

### Requirement: Button supports accent variant

`Button` SHALL support `variant="accent"` using accent tokens with validated contrast.

#### Scenario: Accent variant renders

- **WHEN** `<Button variant="accent">` is rendered
- **THEN** it SHALL use accent background and on-accent text colors

---

### Requirement: Avatar supports decorative mode

`Avatar` SHALL accept `decorative` prop to render `alt=""` and `aria-hidden` when adjacent text provides the name.

#### Scenario: Decorative avatar is silent

- **WHEN** Avatar renders with `decorative` and a `src`
- **THEN** the image SHALL have `alt=""` and `aria-hidden="true"`

---

### Requirement: CI runs axe via Storybook test-runner

The a11y CI job SHALL fail on critical or serious axe violations in component stories.

#### Scenario: CI blocks serious violations

- **WHEN** a story introduces a critical axe violation
- **THEN** `npm run test-storybook` SHALL exit non-zero
