import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import configureStore from './configureStore';

import App from './App';

import routes from './routes';

const Routes = (
  <Router history={hashHistory}>
    {routes}
  </Router>
);

const store = configureStore();

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  rootElement
);
