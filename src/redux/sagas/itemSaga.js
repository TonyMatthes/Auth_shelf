import { put, takeLatest } from 'redux-saga/effects';
import { ITEM_ACTIONS } from '../actions/itemActions';
import { callItemGet } from '../requests/itemRequests';

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


function* itemSaga() {
  yield takeLatest(ITEM_ACTIONS.GET_ITEMS, fetchItems);
}

export default itemSaga;