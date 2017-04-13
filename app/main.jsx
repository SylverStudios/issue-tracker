import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

// create container element on DOM
const container = document.createElement('div'); // eslint-disable-line no-undef
document.body.append(container); // eslint-disable-line no-undef

const appContainer = (
  <div>
    💩
  </div>
);

ReactDOM.render(appContainer, container);
