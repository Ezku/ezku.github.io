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
  fontSize: metrics.xxl,
  lineHeight: metrics.xxl,
  marginBottom: metrics.l,
  marginTop: 0
});

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  fontSize: metrics.xl,
  lineHeight: metrics.xl,
  marginBottom: metrics.m,
  marginTop: 0
});

export const H3 = styled.h3({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  fontSize: metrics.l,
  lineHeight: metrics.xl,
  marginBottom: metrics.s,
  marginTop: 0
});

export const H4 = styled.h4({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  fontSize: metrics.m,
  lineHeight: metrics.l,
  marginBottom: metrics.xs,
  marginTop: 0
});

export const Small = styled.small({
  fontSize: '78.6%',
  lineHeight: 'inherit'
});
