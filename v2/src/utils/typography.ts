import h from 'harmonic';
import 'normalize.css';
import './typography/neue-haas-unica.css';
import './typography/neue-haas-grotesk.css';
import './typography/ibm-plex-mono.css';

import { Harmonic } from './units';
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
  xs: `${h(-2)}px`,
  s: `${h(0)}px`,
  m: `${h(2)}px`,
  l: `${h(4)}px`,
  xl: `${h(6)}px`,
  xxl: `${h(8)}px`
};

export const majorScale = {
  xs: `${h(-1)}px`,
  s: `${h(1)}px`,
  m: `${h(3)}px`,
  l: `${h(5)}px`,
  xl: `${h(7)}px`
};
