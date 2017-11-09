import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css';

import reducers from './reducers';
import { fetchEmployees, fetchAbout } from './actions';

import AboutUsWrapper from './containers/AboutUsWrapper';

import './assets/scss/styles.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)));

store
  .dispatch(fetchAbout(store.dispatch));
store
  .dispatch(fetchEmployees(store.dispatch));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AboutUsWrapper} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);