import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H3, P } from './Typography';
import { monospaceFontStack, minorScale } from '../utils/typography';

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
        Description: styled.div({
          marginBottom: minorScale.s
        }),
        DescriptionLine: P,
        Tags: styled.ul({
          listStyle: 'none',
          margin: `0 -0.618rem ${minorScale.l} -0.618rem`,
          padding: 0,
          display: 'block'
        }),
        Tag: styled.li({
          display: 'inline-block',
          margin: '0.618rem 0.618rem',
          fontFamily: monospaceFontStack.join(', '),
          fontStyle: 'italic',
          fontWeight: 500,
          ':before': {
            display: 'inline-block',
            content: '"#"',
            opacity: 0.618
          }
        })
      })}
    </Section>
  );
}
