/* eslint-disable no-undef, no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { count, user } from './APP/Home/redux.js';
import APP from './APP/index.jsx';

const reducer = combineReducers({
  count,
  user,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={APP} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
