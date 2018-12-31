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

export const Header = makeStyled(({ styled, headerFont, harmonic, bottomMarginScale }) =>
  styled.header(
    {
      fontFamily: headerFont,
      marginTop: 0,
      fontSize: minorScale.s,
      lineHeight: minorScale.m
    },
    bottomMarginScale(harmonic(0))
  )
);

export const Section = makeStyled(({ styled, bodyFont, harmonic, bottomMarginScale }) =>
  styled.section(
    {
      fontFamily: bodyFont,
      marginTop: 0,
      fontSize: minorScale.s,
      lineHeight: minorScale.m
    },
    bottomMarginScale(harmonic(1), 2)
  )
);

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

export const H3 = makeStyled(
  ({ headerFont, fontSizeScale, bottomMarginScale, harmonic, spacing }) =>
    styled.h3(
      {
        fontFamily: headerFont,
        fontWeight: 600,
        margin: 0
      },
      fontSizeScale(harmonic(2), spacing.onehalf),
      bottomMarginScale(harmonic(-4))
    )
);

export const Small = styled.small({
  fontSize: '78.6%',
  lineHeight: 'inherit'
});

export const P = makeStyled(({ fontSizeScale, bottomMarginScale, harmonic, spacing }) =>
  styled.p(
    {
      fontWeight: 400,
      marginTop: 0
    },
    fontSizeScale(harmonic(-1), spacing.double),
    bottomMarginScale(harmonic(0))
  )
);

export const A = styled.a({
  textDecoration: 'none',
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

export const Tag = makeStyled(({ monospaceFont, fontSizeScale, harmonic, spacing }) =>
  styled.li(
    {
      display: 'inline-block',
      margin: '0.618em 0.618em',
      fontFamily: monospaceFont,
      fontStyle: 'italic',
      fontWeight: 500,
      ':before': {
        display: 'inline-block',
        content: '"#"',
        opacity: 0.618
      },
      letterSpacing: '-0.031255em',
      wordSpacing: '-0.21875em',
      marginTop: 0
    },
    fontSizeScale(harmonic(-1), spacing.double)
  )
);
