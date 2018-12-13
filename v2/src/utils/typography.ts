import harmonic from 'harmonic';
import 'normalize.css';
import './typography/neue-haas-unica.css';
import './typography/neue-haas-grotesk.css';

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
