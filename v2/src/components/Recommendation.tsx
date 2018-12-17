import styled from '@emotion/styled';
import * as React from 'react';
import { Section, P } from './Typography';

type Components = {
  Quote: React.FunctionComponent<any>;
  Emphasis: React.FunctionComponent<any>;
  Author: React.FunctionComponent<any>;
  Link: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

export default function MainSection(props: Props) {
  return (
    <Section>
      {props.children({
        Quote: P,
        Emphasis: styled.strong({}),
        Author: styled.cite({}),
        Link: styled.a({})
      })}
    </Section>
  );
}
