import '../../fonts.css';

import * as React from 'react';
import { ReactNode } from 'react';

export default function Container(props: { children: ReactNode }) {
  return (
    <div
      className="container"
      style={{
        fontFamily:
          'neue-haas-unica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      }}
    >
      {props.children}
    </div>
  );
}
