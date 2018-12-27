import styled from '@emotion/styled';

import {
  bodyFontStack,
  headerFontStack,
  monospaceFontStack,
  minorScale,
  majorScale
} from '../utils/typography';
import { breakpoints } from '../utils/layout';
import * as colors from '../utils/colors';
import makeStyled from '../utils/makeStyled';

export const Header = styled.header({
  fontFamily: headerFontStack.join(', '),
  marginTop: 0,
  fontSize: minorScale.s,
  lineHeight: minorScale.m,
  marginBottom: minorScale.s,
  [breakpoints[0]]: {
    marginBottom: minorScale.m
  },
  [breakpoints[1]]: {
    marginBottom: minorScale.l
  },
  [breakpoints[2]]: {
    marginBottom: minorScale.xl
  }
});

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

export const H1 = makeStyled(({ headerFont, fontSizeScale, harmonic, spacing }) =>
  styled.h1(
    {
      fontFamily: headerFont,
      fontWeight: 700,
      margin: 0
    },
    fontSizeScale(harmonic(3), spacing.single)
  )
);

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
    marginBottom: minorScale.m,
    fontSize: minorScale.m,
    lineHeight: minorScale.l
  }
});

export const A = styled.a({
  color: colors.blues[0],
  ':hover': {
    color: colors.blues[0]
  },
  ':visited': {
    color: colors.blues[0]
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
  letterSpacing: '-0.031255em',
  wordSpacing: '-0.21875em',
  fontSize: minorScale.s,
  lineHeight: minorScale.s,
  [breakpoints[1]]: {
    fontSize: majorScale.s,
    lineHeight: majorScale.s
  }
});
