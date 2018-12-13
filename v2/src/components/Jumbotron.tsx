import * as React from 'react';
import { Section, H1, H2, P } from './Typography';

type Components = {
  Header: React.FunctionComponent;
  Title: React.FunctionComponent;
  Subtitle: React.FunctionComponent;
  Lead: React.FunctionComponent;
};

type Props = {
  children: (components: Components) => React.ReactNode;
};
export default function Jumbotron(props: Props) {
  return (
    <Section>
      {props.children({
        Header: Section,
        Title: H1,
        Subtitle: H2,
        Lead: P
      })}
    </Section>
  );
}
