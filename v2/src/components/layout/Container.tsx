import '../../fonts.css';

import * as React from 'react';
import { ReactNode } from 'react';

export default function Container(props: { children: ReactNode }) {
  return <div className="container">{props.children}</div>;
}
