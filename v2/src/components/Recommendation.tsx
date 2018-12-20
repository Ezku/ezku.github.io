import styled from '@emotion/styled';
import * as React from 'react';
import { P } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';

type Components = {
  Quote: React.FunctionComponent<any>;
  Emphasis: React.FunctionComponent<any>;
  Author: React.FunctionComponent<any>;
  Link: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

const Container = styled.blockquote({
  margin: 0,
  padding: 0,
  marginBottom: minorScale.l,
  [breakpoints[1]]: {
    marginBottom: majorScale.l
  }
});

const Quote = styled(P)({
  fontStyle: 'italic',
  fontWeight: 300,
  color: colors.blacks[1],
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

const Emphasis = styled.strong({
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.blacks[0]
});

const Author = styled.cite({
  display: 'block',
  fontStyle: 'normal',
  fontWeight: 700,
  textAlign: 'right',
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

const Link = styled.a({
  display: 'block'
});

export default function Recommendation(props: Props) {
  return (
    <Container>
      {props.children({
        Quote,
        Emphasis,
        Author,
        Link
      })}
    </Container>
  );
}
