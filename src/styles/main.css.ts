import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '960px',
  margin: '0 auto',
  gap: vars.spacing.l,
  padding: vars.spacing.xl,

  '@media': {
    'screen and (max-width: 960px)': {
      padding: vars.spacing.m,
    },

    print: {
      padding: vars.spacing.l,
    },
  },
});

export const photo = style({
  gridArea: 'photo',
  display: 'flex',
  alignContent: 'center',
  flex: 2,
});

export const columns = style({
  display: 'flex',
  gap: vars.spacing.l,
  flexDirection: 'column',

  '@media': {
    'screen and (min-width: 960px)': {
      flexDirection: 'row',
    },

    print: {
      flexDirection: 'row',
    },
  },
});

export const aside = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 2,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 5,
});

export const intro = style({
  display: 'flex',
  flex: 5,
  flexDirection: 'column',
});

export const heading = style({
  display: 'flex',
  fontSize: '6rem',
  marginBlockStart: 0,
  marginBlockEnd: vars.spacing.l,

  '@media': {
    print: {
      marginBlockEnd: vars.spacing.m,
    },
  },
});

export const section = style({
  borderBottom: `6px double ${vars.colors.gray7}`,
  marginBottom: vars.spacing.l,
});

export const sectionHeading = style({
  marginBlockStart: 0,
});

export const description = style({
  fontSize: '1.5rem',
  marginBlockStart: 0,
  marginBlockEnd: 0,

  '@media': {
    print: {
      fontSize: '1.2rem',
    },
  },
});

export const paragraph = style({
  textAlign: 'justify',
});

export const list = style({
  listStyle: 'none',
  paddingInlineStart: 0,
});

export const listItem = style({
  borderBottom: `1px dashed ${vars.colors.gray7}`,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const group = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const timeframe = style({
  marginLeft: vars.spacing.m,
  whiteSpace: 'nowrap',
});

export const link = style({
  color: vars.colors.green8,
  textDecoration: 'none',

  selectors: {
    '&:hover': {
      color: vars.colors.lime9,
      textDecoration: 'underline',
    },
    '&:active': {
      color: vars.colors.lime9,
    },
    '&:visited': {
      color: vars.colors.green7,
    },
  },
});

export const detailsRow = style({
  display: 'flex',
  marginBottom: vars.spacing.m,
  alignItems: 'center',
});

export const icon = style({
  width: '1.5rem',
  height: '1.5rem',
  marginRight: vars.spacing.s,
});

export const imgContainer = style({
  display: 'flex',
  borderRadius: '4%',
});

export const img = style({
  width: '100%',
  border: `1px solid ${vars.colors.gray6}`,
  boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  borderRadius: '4%',
  aspectRatio: 1,
  objectFit: 'cover',
});

export const hideInPrint = style({
  '@media': {
    print: {
      display: 'none',
    },
  },
});

export const avoidBreak = style({
  pageBreakInside: 'avoid',
});
