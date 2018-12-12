import styled from '@emotion/styled';

import { bodyFontStack, headerFontStack } from '../utils/typography';

export const Section = styled.section({
  fontFamily: bodyFontStack.join(', ')
});

export const H1 = styled.h1({
  fontFamily: headerFontStack.join(', ')
});

export const H2 = styled.h2({
  fontFamily: headerFontStack.join(', ')
});

export const H3 = styled.h3({
  fontFamily: headerFontStack.join(', ')
});
