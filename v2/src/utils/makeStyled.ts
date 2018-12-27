import styled from '@emotion/styled';
import {
  spacing,
  fontSizeScale,
  headerFontStack,
  bodyFontStack,
  monospaceFontStack
} from './typography';
import { harmonic } from './units';
import * as colors from './colors';

// Fake an opaque type by tagging with a phantom tag type
type Tagged<T, Tag> = T & { _: Tag };
export type FontFamily = Tagged<string, 'FontFamily'>;

type PropsForStyled = {
  styled: typeof styled;
  headerFont: FontFamily;
  bodyFont: FontFamily;
  monospaceFont: FontFamily;
  spacing: typeof spacing;
  fontSizeScale: typeof fontSizeScale;
  harmonic: typeof harmonic;
  colors: typeof colors;
};

const headerFont = headerFontStack.join(', ') as FontFamily;
const bodyFont = bodyFontStack.join(', ') as FontFamily;
const monospaceFont = monospaceFontStack.join(', ') as FontFamily;

const makeStyled = <A>(f: (props: PropsForStyled) => A): A =>
  f({
    styled,
    headerFont,
    bodyFont,
    monospaceFont,
    spacing,
    fontSizeScale,
    harmonic,
    colors
  });
export default makeStyled;
