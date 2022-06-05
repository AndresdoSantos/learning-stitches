### Stitches

Stitches é uma biblioteca leve e de alto desempenho com foco na criação de componentes.

Vamos navegar pela documentação...

Então, após instalar `@stiches/react`, você poderá escrever seus próprios componentes.

Vamos escrever um componente de Input, fica assim:

```tsx
import { styled } from '@stitches/react';

const Input = styled('input', {
  border: '1px solid black',
  borderRadius: '4px',
  padding: '0 1rem',
  height: '3rem',
  width: '8rem',

  '&:focus': {
    border: '2px solid black',
  },
});
```

Agora que já vimos como criar um componente, vamos partir para a parte de configuração, na raiz do projeto basta criar o `stitches.config.ts`

#### Tokens

Dentro desse arquivo você pode definir `tokens` como parte do `createStitches`.

`createStitches` nada mais é do que um objeto que pode receber:

- **Theme**: Define seu tema de design, que mapeia para CSS props.

Para usar isso em qualquer componente você deve:

1. Importar o `styled` do `stitches.config`.
2. Usar o `$` para acessar o tema que você quiser.

```tsx
{
  backgroundColor: '$gray400';
}
```

Além do `Theme` você pode usar mais ainda do `createStitches`, mas fica para um post.
