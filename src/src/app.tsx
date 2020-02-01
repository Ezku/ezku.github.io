import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexPage from './pages/index';

const rootElement = document.getElementById('content');
const alreadyRendered = rootElement.hasChildNodes();
if (alreadyRendered) {
  ReactDOM.hydrate(<IndexPage />, rootElement);
} else {
  ReactDOM.render(<IndexPage />, rootElement, () =>
    document.dispatchEvent(new Event('react-render-complete'))
  );
}
