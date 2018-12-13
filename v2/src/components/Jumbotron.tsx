import * as React from 'react';
import { H1, H2, P } from './Typography';

type Props = {
  children: (
    components: {
      Title: any;
      Subtitle: any;
      Lead: any;
    }
  ) => React.ReactNode;
};
export default function Jumbotron(props: Props) {
  return (
    <div className="jumbotron">
      {props.children({
        Title: H1,
        Subtitle: H2,
        Lead: P
      })}
    </div>
  );
}
