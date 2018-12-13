import styled from '@emotion/styled';
import { Section } from './Typography';
import { metrics } from '../utils/typography';
import { breakpoints } from '../utils/layout';

export const Container = styled(Section)({
  minWidth: '320px',
  maxWidth: '72ch',
  margin: `0 auto`,
  padding: metrics.m,
  [breakpoints[0]]: {
    width: '61.8%'
  }
});
