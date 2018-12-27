import styled from '@emotion/styled';
import 'normalize.css';
import './typography/neue-haas-unica.css';
import './typography/neue-haas-grotesk.css';
import './typography/ibm-plex-mono.css';

import { Harmonic, harmonic } from './units';
import { breakpoints } from './layout';

// See: https://css-tricks.com/snippets/css/system-font-stack/
export const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
];
export const bodyFontStack = ['neue-haas-unica', ...systemFontStack];
export const headerFontStack = ['neue-haas-grotesk-display', ...systemFontStack];
export const monospaceFontStack = ['ibm-plex-mono', 'monospace'];

type Spacing = (
  metric: Harmonic
) => {
  fontSize: string;
  lineHeight: string;
};
export const spacing = {
  single: (metric: Harmonic) => ({
    fontSize: metric.toString(),
    lineHeight: metric.toString()
  }),
  onehalf: (metric: Harmonic) => ({
    fontSize: metric.toString(),
    lineHeight: metric.map(v => v + 1).toString()
  }),
  double: (metric: Harmonic) => ({
    fontSize: metric.toString(),
    lineHeight: metric.map(v => v + 2).toString()
  })
};

export const fontSizeScale = (metric: Harmonic, s: Spacing = spacing.onehalf) => ({
  ...s(metric),
  [breakpoints[0]]: {
    ...s(metric.map(v => v + 1))
  },
  [breakpoints[1]]: {
    ...s(metric.map(v => v + 2))
  },
  [breakpoints[2]]: {
    ...s(metric.map(v => v + 3))
  }
});

export const minorScale = {
  xs: `${harmonic(-2)}px`,
  s: `${harmonic(0)}px`,
  m: `${harmonic(2)}px`,
  l: `${harmonic(4)}px`,
  xl: `${harmonic(6)}px`,
  xxl: `${harmonic(8)}px`
};

export const majorScale = {
  xs: `${harmonic(-1)}px`,
  s: `${harmonic(1)}px`,
  m: `${harmonic(3)}px`,
  l: `${harmonic(5)}px`,
  xl: `${harmonic(7)}px`
};

// Fake an opaque type by tagging with a phantom tag type
type Tagged<T, Tag> = T & { _: Tag };
type FontFamily = Tagged<string, 'FontFamily'>;

type PropsForStyled = {
  styled: typeof styled;
  headerFont: FontFamily;
  bodyFont: FontFamily;
  monospaceFont: FontFamily;
  spacing: typeof spacing;
  fontSizeScale: typeof fontSizeScale;
  harmonic: typeof harmonic;
};

const headerFont = headerFontStack.join(', ') as FontFamily;
const bodyFont = bodyFontStack.join(', ') as FontFamily;
const monospaceFont = monospaceFontStack.join(', ') as FontFamily;

export const makeStyled = <A>(f: (props: PropsForStyled) => A): A =>
  f({
    styled,
    headerFont,
    bodyFont,
    monospaceFont,
    spacing,
    fontSizeScale,
    harmonic
  });
