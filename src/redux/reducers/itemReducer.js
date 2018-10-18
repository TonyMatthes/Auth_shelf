import { combineReducers } from 'redux';
import { ITEM_ACTIONS } from '../actions/itemActions';

const shelf = (state = [], action) => {
  switch (action.type) {
    case ITEM_ACTIONS.SET_ITEMS:
      return action.payload;
    default:
      return state;
  }
}

const count = (state = [], action) => {
  switch (action.type) {
    case ITEM_ACTIONS.SET_COUNT:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  shelf,
  count,
})