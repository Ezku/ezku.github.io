import 'normalize.css';
import './typography/neue-haas-unica.css';
import './typography/neue-haas-grotesk.css';
import './typography/ibm-plex-mono.css';

import { Harmonic } from './units';
import { breakpoints } from './layout';
import scale from './typography/scale';

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

export type Spacing = (
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

export const bottomMarginScale = (metric: Harmonic, increment: number = 1) => ({
  marginBottom: metric.toString(),
  [breakpoints[0]]: {
    marginBottom: metric.map(v => v + increment * 1).toString()
  },
  [breakpoints[1]]: {
    marginBottom: metric.map(v => v + increment * 2).toString()
  },
  [breakpoints[2]]: {
    marginBottom: metric.map(v => v + increment * 3).toString()
  }
});

export const minorScale = {
  xs: `${scale(-2)}px`,
  s: `${scale(0)}px`,
  m: `${scale(2)}px`,
  l: `${scale(4)}px`,
  xl: `${scale(6)}px`,
  xxl: `${scale(8)}px`
};

export const majorScale = {
  xs: `${scale(-1)}px`,
  s: `${scale(1)}px`,
  m: `${scale(3)}px`,
  l: `${scale(5)}px`,
  xl: `${scale(7)}px`
};
