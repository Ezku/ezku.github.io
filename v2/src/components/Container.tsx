import * as React from 'react';
import { ReactNode } from 'react';

import { Section } from './Typography';

export default function Container(props: { children: ReactNode }) {
  return <Section>{props.children}</Section>;
}
