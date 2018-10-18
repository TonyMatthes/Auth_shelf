import { combineReducers } from 'redux';
import { ITEM_ACTIONS } from '../actions/itemActions';

const shelf = (state = {}, action) => {
  switch (action.type) {
    case ITEM_ACTIONS.SET_ITEMS:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  shelf
})