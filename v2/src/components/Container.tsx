import * as React from 'react';
import { ReactNode } from 'react';

import { bodyFontStack } from '../utils/typography';

export default function Container(props: { children: ReactNode }) {
  return (
    <div
      className="container"
      style={{
        fontFamily: bodyFontStack.join(', ')
      }}
    >
      {props.children}
    </div>
  );
}
