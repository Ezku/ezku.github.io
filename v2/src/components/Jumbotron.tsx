import styled from '@emotion/styled';
import * as React from 'react';
import { Header, Section, H1, H2, P, TagList, Tag } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';

type Components = {
  Header: React.FunctionComponent;
  Title: React.FunctionComponent;
  Subtitle: React.FunctionComponent;
  Lead: React.FunctionComponent;
  Aside: React.FunctionComponent;
  Tags: React.FunctionComponent;
  Tag: React.FunctionComponent;
};

type Props = {
  children: (components: Components) => React.ReactNode;
};

const Container = styled(Section)({
  marginBottom: majorScale.l,
  [breakpoints[0]]: {
    marginBottom: majorScale.l
  },
  [breakpoints[1]]: {
    marginBottom: minorScale.xl
  },
  [breakpoints[2]]: {
    marginBottom: minorScale.xxl
  }
});

const Subtitle = styled(H2)({
  color: colors.blacks[1],
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

export default function Jumbotron(props: Props) {
  return (
    <Container>
      {props.children({
        Header,
        Title: H1,
        Subtitle,
        Lead: P,
        Aside: styled(H2.withComponent('aside'))({
          fontSize: majorScale.s,
          lineHeight: majorScale.s,
          [breakpoints[0]]: {
            fontSize: minorScale.m,
            lineHeight: minorScale.m
          },
          [breakpoints[1]]: {
            fontSize: minorScale.l,
            lineHeight: minorScale.l
          }
        }),
        Tags: TagList,
        Tag: Tag
      })}
    </Container>
  );
}
