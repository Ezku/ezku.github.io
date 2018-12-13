import styled from '@emotion/styled';

import { bodyFontStack, headerFontStack, minorScale, majorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

export const Section = styled.section({
  fontFamily: bodyFontStack.join(', '),
  marginTop: 0,
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  marginBottom: minorScale.l
});

export const H1 = styled.h1({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  marginTop: 0,
  fontSize: majorScale.m,
  lineHeight: majorScale.m,
  marginBottom: majorScale.xs,
  [breakpoints[0]]: {
    fontSize: minorScale.l,
    lineHeight: minorScale.l,
    marginBottom: minorScale.s
  },
  [breakpoints[1]]: {
    fontSize: minorScale.xl,
    lineHeight: minorScale.xl,
    marginBottom: minorScale.m
  },
  [breakpoints[2]]: {
    fontSize: majorScale.xl,
    lineHeight: majorScale.xl,
    marginBottom: majorScale.m
  }
});

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  marginTop: 0,
  fontSize: majorScale.s,
  lineHeight: majorScale.s,
  marginBottom: majorScale.m,
  [breakpoints[0]]: {
    fontSize: minorScale.m,
    lineHeight: minorScale.m,
    marginBottom: minorScale.l
  },
  [breakpoints[1]]: {
    fontSize: minorScale.l,
    lineHeight: minorScale.l,
    marginBottom: minorScale.xl
  },
  [breakpoints[2]]: {
    fontSize: majorScale.l,
    lineHeight: majorScale.l,
    marginBottom: majorScale.xl
  }
});

export const H3 = styled.h3({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  marginTop: 0,
  fontSize: minorScale.m,
  lineHeight: minorScale.l,
  marginBottom: minorScale.s,
  [breakpoints[0]]: {
    fontSize: minorScale.l,
    lineHeight: minorScale.xl,
    marginBottom: minorScale.s
  }
});

export const H4 = styled.h4({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 600,
  fontSize: minorScale.m,
  lineHeight: minorScale.l,
  marginBottom: minorScale.xs,
  marginTop: 0
});

export const Small = styled.small({
  fontSize: '78.6%',
  lineHeight: 'inherit'
});

export const P = styled.p({
  fontWeight: 400,
  marginTop: 0,
  marginBottom: majorScale.s,
  fontSize: majorScale.s,
  lineHeight: majorScale.m,
  [breakpoints[1]]: {
    fontSize: minorScale.m,
    lineHeight: minorScale.l
  }
});

export const Hr = styled.hr({
  height: 0,
  border: 'none',
  marginTop: minorScale.s,
  marginBottom: minorScale.s
});

export const Abbr = styled.abbr({
  fontVariant: 'all-small-caps'
});
