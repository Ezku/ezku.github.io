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
  fontSize: minorScale.m,
  lineHeight: minorScale.m,
  [breakpoints[0]]: {
    fontSize: majorScale.m,
    lineHeight: majorScale.m
  },
  [breakpoints[1]]: {
    fontSize: majorScale.l,
    lineHeight: majorScale.l
  },
  [breakpoints[2]]: {
    fontSize: minorScale.xl,
    lineHeight: minorScale.xl
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
