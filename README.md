# Lemify - Landing Page

Esta é a landing page do Lemify, uma plataforma de atendimento unificado.

## Tecnologias Utilizadas

- **React 19**
- **Vite**
- **@xyflow/react** (para animações de fluxo no Hero)
- **Vanilla CSS** (estilização modular por componente)

## Estrutura do Projeto

O projeto segue uma estrutura baseada em componentes, onde cada seção da LP é um componente independente dentro de `src/components`.

```text
src/
  components/    # Seções da página (Hero, Features, Plans, etc)
  assets/        # Imagens e vetores locais
  App.jsx        # Composição principal da página
  main.jsx       # Ponto de entrada
  index.css      # Estilos globais e variáveis
```

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a build de produção:
   ```bash
   npm run build
   ```
