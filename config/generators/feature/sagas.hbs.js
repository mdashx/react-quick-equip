/* 
 * 
 * Sagas for {{ titleCase name }}
 * 
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { DEFAULT_ACTION } from './actions';

function* defaultSaga() {
  // Do something when action is dispatched.
}

export function* {{ camelCase name }}Watcher() {
  yield takeLatest(DEFAULT_ACTION, defaultSaga);
}
