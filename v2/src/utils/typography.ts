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
