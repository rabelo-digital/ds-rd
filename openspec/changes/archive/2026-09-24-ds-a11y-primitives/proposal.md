## Why

O site público expõe falhas de acessibilidade (accent laranja `#FF3C00` abaixo de WCAG AA, controles só-ícone ad-hoc, skip link fora do DS). A spec `a11y-compliance` exige axe no CI e componentes reutilizáveis, mas faltam átomos (`IconButton`, `SkipLink`), variante `accent` no `Button`, validação de contraste nos tokens e CI axe real.

## What Changes

- Ajustar tokens `accent` para par AA com texto branco (orange-600 como default de superfície)
- Adicionar `IconButton` e `SkipLink` como átomos exportados
- Adicionar variante `accent` em `Button` e `Badge`
- Corrigir `Avatar` com prop `decorative` e separação `alt`/`name`
- Testes de contraste em `tokens.test.ts`
- Configurar `.storybook/test-runner.ts` com axe-playwright
- Regenerar `tokens.css`

## Capabilities

### New Capabilities

- `ds-a11y-primitives`: Átomos e tokens acessíveis reutilizáveis pelo site e marketing

### Modified Capabilities

- `a11y-compliance`: CI axe passa a falhar em violações critical/serious via test-runner

## Impact

- **Tokens**: `colors.primitive.ts`, `colors.semantic.ts`, `tokens.css`
- **Componentes**: `Button`, `Badge`, `Avatar`, novos `IconButton`, `SkipLink`
- **CI/Storybook**: `test-runner.ts`, `preview.ts`
- **Breaking**: mudança visual mínima no accent (laranja levemente mais escuro)
