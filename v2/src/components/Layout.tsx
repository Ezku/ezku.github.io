import styled from '@emotion/styled';
import { Section } from './Typography';
import { metrics } from '../utils/typography';

export const Container = styled(Section)({
  boxSizing: 'border-box',
  minWidth: '320px',
  maxWidth: '72ch',
  margin: `0 auto`,
  padding: metrics.m,
  width: '61.8%'
});
