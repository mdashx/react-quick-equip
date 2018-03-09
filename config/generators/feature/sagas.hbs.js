/* 
 * 
 * Sagas for {{ titleCase name }}
 * 
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { DEFAULT_ACTION } from './constants';

export function* defaultSaga() {
  // Do something when action is dispatched.
  yield call((msg) => console.log(msg), 'one call');
  yield call((msg) => console.log(msg), 'two call');
  yield call((msg) => console.log(msg), 'three call');
  yield call((msg) => console.log(msg), 'test me');
}

export function* {{ camelCase name }}Watcher() {
  yield takeLatest(DEFAULT_ACTION, defaultSaga);
}
