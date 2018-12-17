import * as React from 'react';
import { ImgHTMLAttributes, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Components = {
  Image: React.FunctionComponent<ImgHTMLAttributes<any>>;
  Tagline: React.FunctionComponent<HTMLAttributes<any>>;
};
type Props = {
  children: (components: Components) => React.ReactNode;
};

export default function Profile(props: Props) {
  return (
    <header>
      {props.children({
        Image: styled.img({
          display: 'block',
          width: '50%',
          minWidth: '128px',
          maxWidth: '256px',
          borderRadius: '50%'
        }),
        Tagline: styled.h2({})
      })}
    </header>
  );
}
