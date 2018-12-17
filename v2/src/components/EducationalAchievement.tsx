import styled from '@emotion/styled';
import * as React from 'react';
import { H3, P, TagList, Tag } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

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
  opacity: 0.786,
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

const Container = styled.div({
  margin: 0,
  padding: 0,
  marginBottom: minorScale.l,
  [breakpoints[1]]: {
    marginBottom: majorScale.l
  }
});

const Description = styled(P)({
  opacity: 0.786,
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
  color: 'rgba(0,0,0,1)'
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

const Link = styled.a({});

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
