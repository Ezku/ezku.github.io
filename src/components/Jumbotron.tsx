import styled from '@emotion/styled';
import * as React from 'react';
import { Header, Section, H1, H2, P, TagList, Tag } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import makeStyled from '../utils/makeStyled';

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

const Subtitle = makeStyled(({ fontSizeScale, harmonic, spacing, colors }) =>
  styled(H2)(
    {
      color: colors.blacks[1]
    },
    fontSizeScale(harmonic(1), spacing.onehalf)
  )
);

const Aside = makeStyled(({ fontSizeScale, harmonic, spacing, colors }) =>
  styled(H2.withComponent('aside'))(
    {
      color: colors.blacks[1]
    },
    fontSizeScale(harmonic(1), spacing.onehalf)
  )
);
export default function Jumbotron(props: Props) {
  return (
    <Container>
      {props.children({
        Header,
        Title: H1,
        Subtitle,
        Lead: P,
        Aside,
        Tags: TagList,
        Tag: Tag
      })}
    </Container>
  );
}
