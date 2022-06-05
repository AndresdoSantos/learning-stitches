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

export { Input };
