import styled from '@emotion/styled';

import {
  bodyFontStack,
  headerFontStack,
  monospaceFontStack,
  minorScale,
  majorScale
} from '../utils/typography';
import { breakpoints } from '../utils/layout';

export const Section = styled.section({
  fontFamily: bodyFontStack.join(', '),
  marginTop: 0,
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  marginBottom: minorScale.m,
  [breakpoints[0]]: {
    marginBottom: minorScale.l
  },
  [breakpoints[1]]: {
    marginBottom: minorScale.xl
  },
  [breakpoints[2]]: {
    marginBottom: minorScale.xxl
  }
});

export const H1 = styled.h1({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  margin: 0,
  fontSize: majorScale.m,
  lineHeight: majorScale.m,
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

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', '),
  fontWeight: 700,
  margin: 0
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

export const TagList = styled.ul({
  listStyle: 'none',
  margin: `0 -0.618rem ${minorScale.l} -0.618rem`,
  padding: 0,
  display: 'block'
});

export const Tag = styled.li({
  display: 'inline-block',
  margin: '0.618rem 0.618rem',
  fontFamily: monospaceFontStack.join(', '),
  fontStyle: 'italic',
  fontWeight: 500,
  ':before': {
    display: 'inline-block',
    content: '"#"',
    opacity: 0.618
  },
  letterSpacing: '-0.0625em',
  wordSpacing: '-0.4375em',
  fontSize: minorScale.s,
  lineHeight: minorScale.s,
  [breakpoints[1]]: {
    fontSize: majorScale.s,
    lineHeight: majorScale.s
  }
});
