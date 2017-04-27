import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import style from './main.scss';
import Omnibox from './Omnibox';
console.log(style)

import thing from './test.jsx';
console.log(thing)
// create container element on DOM
const container = document.createElement('div'); // eslint-disable-line no-undef
document.body.append(container); // eslint-disable-line no-undef

const appContainer = (
  <div className={style.app}>
    <Omnibox />
  </div>
);

ReactDOM.render(appContainer, container);
