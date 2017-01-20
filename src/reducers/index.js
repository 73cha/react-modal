import { combineReducers } from 'redux';
import { CLOSE_MODAL, CHANGE_MODAL } from '../actions';


const initialState = { activeModalName: '' };

function reducerChangeModal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return Object.assign({}, state, {
        activeModalName: action.activeModalName
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        activeModalName: ''
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducerChangeModal
});


export default rootReducer;
