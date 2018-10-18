import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import itemSaga from './itemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    itemSaga(),
    // watchIncrementAsync()
  ]);
}
