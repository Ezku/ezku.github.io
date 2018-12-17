import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H3, P, TagList, Tag } from './Typography';
import { minorScale, majorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

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

const Title = styled(H3)({
  opacity: 0.786,
  fontWeight: 700,
  fontSize: majorScale.s,
  lineHeight: majorScale.s,
  [breakpoints[0]]: {
    fontSize: minorScale.m,
    lineHeight: minorScale.m
  },
  [breakpoints[1]]: {
    fontSize: minorScale.l,
    lineHeight: minorScale.l
  },
  [breakpoints[2]]: {
    fontSize: majorScale.l,
    lineHeight: majorScale.l
  }
});

export default function Subsection(props: Props) {
  return (
    <Section>
      {props.children({
        Header: styled.header({}),
        Title: Title,
        Lead: P,
        Description: styled.div({
          marginBottom: minorScale.s
        }),
        DescriptionLine: P,
        Tags: TagList,
        Tag: Tag
      })}
    </Section>
  );
}
