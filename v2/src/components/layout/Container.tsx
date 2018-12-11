import * as React from 'react';
import { ReactNode } from 'react';

import { fontStack } from '../typography/fonts';

export default function Container(props: { children: ReactNode }) {
  return (
    <div
      className="container"
      style={{
        fontFamily: fontStack.join(', ')
      }}
    >
      {props.children}
    </div>
  );
}
