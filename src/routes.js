import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './App';
import IndexComponent from './IndexComponent';
import AboutComponent from './AboutComponent';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={IndexComponent} />
    <Route path="about" component={AboutComponent} />
  </Route>
);
