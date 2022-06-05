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
