import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';
import { fetchEmployees, fetchAbout } from './actions'

const TestComponent = () => {
  return <h1>test</h1>;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)));

store
  .dispatch(fetchAbout(store.dispatch))
store
  .dispatch(fetchEmployees(store.dispatch))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TestComponent} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);