import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexPage from './pages/index';

ReactDOM.render(<IndexPage />, document.getElementById('content'), () =>
  document.dispatchEvent(new Event('react-render-complete'))
);
