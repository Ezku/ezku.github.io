import * as React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import { Section } from './Typography';
import { minorScale } from '../utils/typography';

export const PageStyles = () => (
  <Global
    styles={{
      '#content': {
        background: 'rgba(0,5,10,0.01)'
      }
    }}
  />
);

export const Container = styled(Section)({
  boxSizing: 'border-box',
  minWidth: '320px',
  maxWidth: '660px',
  margin: `0 auto`,
  padding: minorScale.s,
  width: '61.8%'
});
