import { styled } from '../../stitches.config';

const Button = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '8px',
  fontSize: 12,
  padding: '1rem 2rem',
  border: 'none',
  outline: 'none',
  transition: 'background 0.8s',
  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

export { Button };
