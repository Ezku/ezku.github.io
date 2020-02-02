import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H3, P, A, TagList, Tag } from './Typography';
import { minorScale, majorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';
import makeStyled from '../utils/makeStyled';

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

const Lead = makeStyled(({ fontSizeScale, harmonic, spacing }) =>
  styled(P)(fontSizeScale(harmonic(0), spacing.double))
);

const DescriptionLine = styled(P)({
  color: colors.blacks[1]
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
        Lead,
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
