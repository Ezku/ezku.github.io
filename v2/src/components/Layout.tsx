import styled from '@emotion/styled';
import { Section } from './Typography';
import { metrics } from '../utils/typography';

export const Container = styled(Section)({
  width: '61.8%',
  maxWidth: '72ch',
  margin: `${metrics.m} auto`
});
