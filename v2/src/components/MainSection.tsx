import styled from '@emotion/styled';
import * as React from 'react';
import { Section, H2, Hr } from './Typography';
import { majorScale, minorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

type Components = {
  Title: React.FunctionComponent<any>;
  Divider: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

const Title = styled(H2)({
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

export default function MainSection(props: Props) {
  return (
    <Section>
      {props.children({
        Title,
        Divider: Hr
      })}
    </Section>
  );
}
