import * as React from 'react';
import { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import Jumbotron from './Jumbotron';
import { minorScale, majorScale } from '../utils/typography';
import { breakpoints } from '../utils/layout';

type Components = {
  Header: React.FunctionComponent<any>;
  Image: React.FunctionComponent<ImgHTMLAttributes<any>>;
  Title: React.FunctionComponent<any>;
  Subtitle: React.FunctionComponent<any>;
  Lead: React.FunctionComponent<any>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

export default function Profile(props: Props) {
  return (
    <Jumbotron>
      {({ Header, Title, Subtitle, Lead }) =>
        props.children({
          Header: styled(Header)({
            textAlign: 'center'
          }),
          Title,
          Subtitle,
          Lead: styled(Lead)({
            textAlign: 'center'
          }),
          Image: styled.img({
            width: '100%',
            minWidth: '128px',
            maxWidth: '256px',
            borderRadius: '50%',
            marginBottom: majorScale.m,
            [breakpoints[0]]: {
              marginBottom: majorScale.m
            },
            [breakpoints[1]]: {
              marginBottom: minorScale.l
            },
            [breakpoints[2]]: {
              marginBottom: minorScale.xl
            }
          })
        })
      }
    </Jumbotron>
  );
}
