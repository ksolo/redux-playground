import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  ButtonPage,
  AnotherPage,
  NotFoundPage,
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={ButtonPage} />
    <Route path="/another" component={AnotherPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
