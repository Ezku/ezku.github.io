import harmonic from 'harmonic';
import 'normalize.css';
import './typography/neue-haas-unica.css';

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

export const metrics = {
  s: `${harmonic(0)}px`,
  m: `${harmonic(1)}px`,
  l: `${harmonic(2)}px`,
  xl: `${harmonic(3)}px`,
  xxl: `${harmonic(4)}px`
};
