/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* global document window */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Rx from 'rxjs/Rx';

import App from './App';

const header = new Rx.ReplaySubject();
const body = new Rx.ReplaySubject();

window.header = header;
window.body = body;

header.next('hello');
body.next('test');

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App header={header} body={body} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
