import assert from 'power-assert';
import React from 'react';
import { CHANGE_MODAL, CLOSE_MODAL, actionChangeModal, actionCloseModal } from '../src/actions';
import rootReducer from '../src/reducers';


describe('actionChangeModal', () => {
  it ('should create change modal action', () => {
    const action = actionChangeModal('modal1');

    assert(action.type === CHANGE_MODAL);
    assert(action.activeModalName === 'modal1');
  });
});

describe('actionCloseModal', () => {
  it ('should empty value of activeModalName',  () => {
    const action = actionCloseModal();

    assert(action.type === CLOSE_MODAL);
    assert(action.activeModalName === '');
  });
});
