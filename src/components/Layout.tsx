import * as React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import { Section } from './Typography';
import { minorScale } from '../utils/typography';
import * as colors from '../utils/colors';

export const PageStyles = () => (
  <Global
    styles={{
      html: {
        background: colors.whites[0],
        color: colors.blacks[0]
      }
    }}
  />
);

export const Container = styled(Section)({
  boxSizing: 'border-box',
  minWidth: '320px',
  maxWidth: '80ch',
  margin: `0 auto`,
  padding: minorScale.s,
  width: '61.8%'
});
