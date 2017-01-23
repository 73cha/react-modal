import assert from 'power-assert';
import React from 'react';
import rootReducer from '../src/reducers';


describe('reducerChangeModal', () => {
  it ('should return the initial state when receves unknown actiontype', () => {
    const newState = rootReducer({}, { type: 'HOGE' });

    assert(newState.reducerChangeModal.activeModalName === '');
  });
});
