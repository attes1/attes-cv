import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle(':root', { fontFamily: '"Inter", sans-serif;', color: vars.colors.gray8 });

globalStyle(':root', {
  '@supports': {
    '(font-variation-settings: normal)': {
      fontFamily: '"Inter var", sans-serif;',
    },
  },
});

globalStyle('html, body', {
  margin: 0,
  backgroundImage: 'linear-gradient( 174.2deg, rgba(240,246,238,1) 7.1%, rgba(255,244,228,1) 67.4% )',
});

globalStyle('a', {
  '@media': {
    print: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
});
