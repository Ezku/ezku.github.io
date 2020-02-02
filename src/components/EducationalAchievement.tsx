import styled from '@emotion/styled';
import * as React from 'react';
import { H3, P, A, TagList, Tag } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';

type Components = {
  Title: React.FunctionComponent<any>;
  Description: React.FunctionComponent<any>;
  Emphasis: React.FunctionComponent<any>;
  Provenance: React.FunctionComponent<any>;
  Link: React.FunctionComponent<any>;
  Tags: React.FunctionComponent<any>;
  Tag: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

const Title = styled(H3)({
  color: colors.blacks[1],
  fontWeight: 700,
  fontSize: majorScale.s,
  lineHeight: majorScale.s,
  [breakpoints[0]]: {
    fontSize: minorScale.m,
    lineHeight: minorScale.m
  },
  [breakpoints[1]]: {
    fontSize: majorScale.m,
    lineHeight: majorScale.m
  },
  [breakpoints[2]]: {
    fontSize: minorScale.l,
    lineHeight: minorScale.l
  }
});

const Container = styled.div({
  margin: 0,
  padding: 0,
  marginBottom: minorScale.l,
  [breakpoints[1]]: {
    marginBottom: majorScale.l
  }
});

const Description = styled(P)({
  color: colors.blacks[1],
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  [breakpoints[1]]: {
    fontSize: majorScale.s,
    lineHeight: majorScale.m
  }
});

const Emphasis = styled.strong({
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.blacks[0]
});

const Provenance = styled(P)({
  display: 'block',
  fontWeight: 500,
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  [breakpoints[0]]: {
    fontSize: majorScale.s,
    lineHeight: majorScale.m
  },
  [breakpoints[1]]: {
    fontSize: minorScale.m,
    lineHeight: minorScale.l
  }
});

const Link = styled(A)({
  color: colors.blues[1]
});

export default function EducationalAchievement(props: Props) {
  return (
    <Container>
      {props.children({
        Title,
        Description,
        Emphasis,
        Provenance,
        Link,
        Tags: TagList,
        Tag
      })}
    </Container>
  );
}
