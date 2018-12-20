import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H3, P, A, TagList, Tag } from './Typography';
import { minorScale, majorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';

type Components = {
  Header: React.FunctionComponent<any>;
  Title: React.FunctionComponent<any>;
  Link: React.FunctionComponent<any>;
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
  color: colors.blacks[1],
  fontWeight: 700,
  fontSize: minorScale.m,
  lineHeight: minorScale.m,
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

const DescriptionLine = styled(P)({
  color: colors.blacks[1],
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  [breakpoints[1]]: {
    fontSize: majorScale.s,
    lineHeight: majorScale.m
  }
});

export default function Subsection(props: Props) {
  return (
    <Section>
      {props.children({
        Header: styled.header({}),
        Title: Title,
        Link: styled(A)({
          color: colors.blues[1]
        }),
        Lead: P,
        Description: styled.div({
          marginBottom: minorScale.s
        }),
        DescriptionLine,
        Tags: TagList,
        Tag: Tag
      })}
    </Section>
  );
}
