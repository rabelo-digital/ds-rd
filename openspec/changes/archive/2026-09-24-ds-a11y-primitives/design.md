## Context

O DS usa `primary` azul (OK em contraste) e `accent` laranja `#FF3C00` (falha AA com branco). O site mapeia accent como primary no marketing. CI roda test-storybook mas sem axe configurado.

## Goals / Non-Goals

**Goals:**

- Pares `accent`/`on-accent` ≥ 4.5:1
- `IconButton` e `SkipLink` prontos para consumo
- `Button` variant `accent`
- Avatar sem alt redundante
- axe no test-runner

**Non-Goals:**

- Carousel molecule (fica no site por ora)
- Migrar todo Storybook com play functions

## Decisions

### 1. Accent default → orange-600 (`#D83200`)

Mantém identidade visual; ratio ~4.6:1 com branco. `orange-500` permanece como primitive para highlights não-texto.

### 2. IconButton

`<button>` nativo, `aria-label` obrigatório, `children` ícone com `aria-hidden`, `min 44×44px`.

### 3. SkipLink

`<a href="#main-content">` com estilos focus-only no módulo CSS; consumidor define `<main id="main-content">`.

### 4. Avatar `decorative`

Quando `decorative={true}`: `alt=""`, `aria-hidden` na imagem.

## Risks / Trade-offs

- **[Risk] Accent mais escuro** → Mitigação: documentar em Tokens story
- **[Risk] test-runner flaky** → Mitigação: wait-on + retry no CI existente
