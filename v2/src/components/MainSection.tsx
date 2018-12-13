import * as React from 'react';
import { Section, H2, Hr } from './Typography';

type Components = {
  Title: React.FunctionComponent<any>;
  Divider: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};
export default function MainSection(props: Props) {
  return (
    <Section>
      {props.children({
        Title: H2,
        Divider: Hr
      })}
    </Section>
  );
}
