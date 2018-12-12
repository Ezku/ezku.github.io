import styled from '@emotion/styled';

import { bodyFontStack, headerFontStack, metrics } from '../utils/typography';

export const Section = styled.section({
  fontFamily: bodyFontStack.join(', '),
  fontSize: metrics.s,
  lineHeight: metrics.m
});

export const H1 = styled.h1({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  fontSize: metrics.xl,
  lineHeight: metrics.xxl
});

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  fontSize: metrics.l,
  lineHeight: metrics.xl
});

export const H3 = styled.h3({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  fontSize: metrics.m,
  lineHeight: metrics.l
});
