import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H3, P } from './Typography';

type Components = {
  Header: React.FunctionComponent<any>;
  Title: React.FunctionComponent<any>;
  Lead: React.FunctionComponent<any>;
  Description: React.FunctionComponent<any>;
  DescriptionLine: React.FunctionComponent<any>;
  Tags: React.FunctionComponent<any>;
  Tag: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};
export default function Subsection(props: Props) {
  return (
    <Section>
      {props.children({
        Header: styled.header({}),
        Title: H3,
        Lead: P,
        Description: styled.div({}),
        DescriptionLine: P,
        Tags: styled.ul({}),
        Tag: styled.li({})
      })}
    </Section>
  );
}
