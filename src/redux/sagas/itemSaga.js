import { put, takeLatest } from 'redux-saga/effects';
import { ITEM_ACTIONS } from '../actions/itemActions';
import { callItemGet, callItemDelete, callItemPost, callGetItemCount } from '../requests/itemRequests';

function* fetchItems() {
  try {
    //stores server response.data as 'items'
    const items = yield callItemGet();
    //stores items list in redux store
    yield put({ type: ITEM_ACTIONS.SET_ITEMS, payload: items });
  } catch (error) {
    console.log('Error fetching items', error);
  }
}

function* fetchCount() {
  try {
    const count = yield callGetItemCount();
    yield put({ type: ITEM_ACTIONS.SET_COUNT, payload: count });
  } catch (error) {
    console.log('Error fetching count:', error);
  }
}

function* deleteItem(action) {
  try {
    yield callItemDelete(action.payload);
    yield put({ type: ITEM_ACTIONS.GET_ITEMS });
  } catch (error) {
    console.log('Error deleting items', error);
  }
}

function* addItem(action) {
  try {
    yield callItemPost(action.payload);
    yield put({ type: ITEM_ACTIONS.GET_ITEMS });
  } catch (error) {
    console.log('Error adding item', error);
  }
}


function* itemSaga() {
  yield takeLatest(ITEM_ACTIONS.GET_ITEMS, fetchItems);
  yield takeLatest(ITEM_ACTIONS.DELETE_ITEM, deleteItem);
  yield takeLatest(ITEM_ACTIONS.ADD_ITEM, addItem);
  yield takeLatest(ITEM_ACTIONS.GET_COUNT, fetchCount);
}

export default itemSaga;