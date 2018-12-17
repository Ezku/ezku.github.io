import styled from '@emotion/styled';
import { Section } from './Typography';
import { minorScale } from '../utils/typography';

export const Container = styled(Section)({
  boxSizing: 'border-box',
  minWidth: '320px',
  maxWidth: '660px',
  margin: `0 auto`,
  padding: minorScale.s,
  width: '61.8%'
});
