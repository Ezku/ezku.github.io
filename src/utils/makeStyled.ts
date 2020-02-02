import styled from '@emotion/styled';
import {
  spacing,
  fontSizeScale,
  bottomMarginScale,
  headerFontStack,
  bodyFontStack,
  monospaceFontStack
} from './typography';
import { harmonic } from './units';
import * as colors from './colors';

// Fake an opaque type by tagging with a phantom tag type
type Tagged<T, Tag> = T & { _: Tag };
export type FontFamily = Tagged<string, 'FontFamily'>;

type DesignAtoms = {
  headerFont: FontFamily;
  bodyFont: FontFamily;
  monospaceFont: FontFamily;
  colors: typeof colors;
};
type DesignHelpers = {
  styled: typeof styled;
  spacing: typeof spacing;
  fontSizeScale: typeof fontSizeScale;
  bottomMarginScale: typeof bottomMarginScale;
  harmonic: typeof harmonic;
};

const headerFont = headerFontStack.join(', ') as FontFamily;
const bodyFont = bodyFontStack.join(', ') as FontFamily;
const monospaceFont = monospaceFontStack.join(', ') as FontFamily;

const makeStyled = <A>(f: (atomsAndHelpers: DesignAtoms & DesignHelpers) => A): A =>
  f({
    styled,
    headerFont,
    bodyFont,
    monospaceFont,
    spacing,
    fontSizeScale,
    bottomMarginScale,
    harmonic,
    colors
  });
export default makeStyled;
