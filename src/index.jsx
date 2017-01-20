import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ModalContainer from './container/ModalContainer';

const store = createStore(
  rootReducer,
  {},
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ModalContainer />
  </Provider>,
  document.getElementById('mountModal')
);
