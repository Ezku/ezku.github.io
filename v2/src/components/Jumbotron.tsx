import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H1, H2, P } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

type Components = {
  Header: React.FunctionComponent;
  Title: React.FunctionComponent;
  Subtitle: React.FunctionComponent;
  Lead: React.FunctionComponent;
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
        Header: Section,
        Title: H1,
        Subtitle,
        Lead: P
      })}
    </Container>
  );
}
