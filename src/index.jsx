import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ModalContainer from './container/ModalContainer';

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <ModalContainer />
  </Provider>,
  document.getElementById('mountModal')
);
