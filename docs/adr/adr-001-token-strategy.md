# ADR-001: Estratégia de Tokens em Duas Camadas (Primitivo + Semântico)

**Status:** Accepted  
**Date:** 2026-06-23  
**Deciders:** Rabelo Digital Frontend Team

## Contexto

O site-rd-frontend tinha 68+ componentes com valores de cor, espaçamento e tipografia hardcoded (`#02548B`, `rgb(22, 181, 151)`, `#FF3C00`, etc.) diretamente nos arquivos de componente e CSS global. Isso tornava impossível fazer mudanças visuais consistentes e preparar o sistema para temas.

## Decisão

Adotar uma arquitetura de tokens em **duas camadas**:

1. **Primitivos** (`colors.primitive.ts`): Paleta bruta de cores com escala numérica (ex: `blue.700 = #02548B`). Consumidos apenas pela camada semântica, nunca diretamente por componentes.

2. **Semânticos** (`colors.semantic.ts`): Aliases com nomes de papel/intenção (ex: `color.primary = primitive.blue.700`). São estes que os componentes referenciam.

Todos os tokens são exportados como:
- Constantes TypeScript (para lógica em JS/TS)
- CSS custom properties em `tokens.css` (para uso em CSS Modules)

## Consequências

### Positivas
- Mudança de cor da marca afeta todos os componentes via um único arquivo (`colors.semantic.ts`)
- Adição de temas (dark mode, white-label) é uma questão de remapear aliases semânticos
- Componentes são blindados contra mudanças da paleta primitiva
- Autocompletar TypeScript guia os desenvolvedores para os tokens corretos

### Negativas / Trade-offs
- Curva de aprendizado: dev precisa entender a distinção primitivo/semântico
- Dois arquivos para manter em vez de um

## Alternativas consideradas

| Alternativa | Por que descartada |
|-------------|-------------------|
| Tokens de camada única | Mistura paleta e semântica; dificulta temas e refatorações |
| CSS-only (apenas custom properties) | Perde type safety e autocompletar no TypeScript |
| Tailwind CSS config | Requer JIT em todos os consumidores; conflita com Bootstrap durante migração |
