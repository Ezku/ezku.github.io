import styled from '@emotion/styled';

import { bodyFontStack, headerFontStack, metrics, alternativeMetrics } from '../utils/typography';
import { breakpoints } from '../utils/layout';

export const Section = styled.section({
  fontFamily: bodyFontStack.join(', '),
  marginTop: 0,
  fontSize: metrics.s,
  lineHeight: metrics.m,
  marginBottom: metrics.l
});

export const H1 = styled.h1({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  marginTop: 0,
  fontSize: alternativeMetrics.m,
  lineHeight: alternativeMetrics.m,
  marginBottom: alternativeMetrics.xs,
  [breakpoints[0]]: {
    fontSize: metrics.l,
    lineHeight: metrics.l,
    marginBottom: metrics.s
  },
  [breakpoints[1]]: {
    fontSize: metrics.xl,
    lineHeight: metrics.xl,
    marginBottom: metrics.m
  },
  [breakpoints[2]]: {
    fontSize: metrics.xxl,
    lineHeight: metrics.xxl,
    marginBottom: metrics.l
  }
});

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  marginTop: 0,
  fontSize: alternativeMetrics.s,
  lineHeight: alternativeMetrics.s,
  marginBottom: alternativeMetrics.m,
  [breakpoints[0]]: {
    fontSize: metrics.m,
    lineHeight: metrics.m,
    marginBottom: metrics.l
  },
  [breakpoints[1]]: {
    fontSize: metrics.l,
    lineHeight: metrics.l,
    marginBottom: metrics.xl
  },
  [breakpoints[2]]: {
    fontSize: metrics.xl,
    lineHeight: metrics.xl,
    marginBottom: metrics.xxl
  }
});

export const H3 = styled.h3({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  marginTop: 0,
  fontSize: metrics.m,
  lineHeight: metrics.l,
  marginBottom: metrics.s,
  [breakpoints[0]]: {
    fontSize: metrics.l,
    lineHeight: metrics.xl,
    marginBottom: metrics.s
  }
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

export const P = styled.p({
  fontWeight: 400,
  marginTop: 0,
  marginBottom: alternativeMetrics.s,
  fontSize: alternativeMetrics.s,
  lineHeight: alternativeMetrics.m,
  [breakpoints[1]]: {
    fontSize: metrics.m,
    lineHeight: metrics.l
  }
});

export const Hr = styled.hr({
  height: 0,
  border: 'none',
  marginTop: metrics.s,
  marginBottom: metrics.s
});

export const Abbr = styled.abbr({
  fontVariant: 'all-small-caps'
});
