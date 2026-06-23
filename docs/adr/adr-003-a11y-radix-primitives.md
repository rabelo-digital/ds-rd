# ADR-003: Radix UI Primitives para Componentes Interativos

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

Componentes interativos como Modal, Drawer, Tooltip, Select, Tabs, Accordion e Toast requerem comportamentos complexos de acessibilidade: focus trapping, roving tabindex, gerenciamento de portal, anúncios para screen readers e navegação por teclado segundo padrões WAI-ARIA. Implementar esses padrões do zero é custoso e propenso a erros.

O site-rd-frontend tinha problemas conhecidos: `div` como botão, ausência de `role="dialog"`, `aria-modal` e foco não retornando ao trigger após fechar modais.

## Decisão

Usar **Radix UI Primitives** (`@radix-ui/react-*`) como base headless para todos os componentes interativos do DS:

| Componente DS | Primitivo Radix |
|---------------|----------------|
| Modal | `@radix-ui/react-dialog` |
| Drawer | `@radix-ui/react-dialog` |
| Tooltip | `@radix-ui/react-tooltip` |
| Select | `@radix-ui/react-select` |
| Tabs | `@radix-ui/react-tabs` |
| Accordion | `@radix-ui/react-accordion` |
| Toast | `@radix-ui/react-toast` |
| Checkbox | `@radix-ui/react-checkbox` |
| RadioGroup | `@radix-ui/react-radio-group` |

## Consequências

### Positivas
- WAI-ARIA 1.2 compliance garantido pelo Radix
- Focus trapping, Escape dismissal e retorno de foco automáticos
- Portal rendering fora da árvore DOM resolve problemas de z-index e overflow
- **Headless**: toda a estética é controlada pelo DS (CSS Modules + tokens)
- Sem breaking changes de estilo ao atualizar o Radix

### Negativas / Trade-offs
- Adiciona ~40–60KB por primitivo usado (mitigado por tree-shaking e code splitting)
- API do Radix precisa ser aprendida pela equipe

## Alternativas consideradas

| Alternativa | Por que descartada |
|-------------|-------------------|
| Headless UI (Tailwind Labs) | Assume Tailwind para estilização; primitivos menos completos que Radix |
| Implementação própria | Alto custo de desenvolvimento; alto risco de regressão de a11y |
| React Aria (Adobe) | Excelente a11y mas API mais verbosa; maior curva de aprendizado |
