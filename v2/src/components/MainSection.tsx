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
    fontSize: minorScale.l,
    lineHeight: minorScale.l
  },
  [breakpoints[1]]: {
    fontSize: minorScale.xl,
    lineHeight: minorScale.xl
  },
  [breakpoints[2]]: {
    fontSize: majorScale.xl,
    lineHeight: majorScale.xl
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
