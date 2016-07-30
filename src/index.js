import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import App from './App';

const store = configureStore();

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
