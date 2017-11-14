import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectCurrentUsername } from 'selectors/toLookup';
import { LOOKUP_USERNAME } from 'containers/LookupUsers/constants';


function* lookupUserSaga() {
  const username = yield select(makeSelectCurrentUsername());
  console.log(`Look up user ${username}`);
}


export function* lookupUserWatcher() {
  yield takeLatest(LOOKUP_USERNAME, lookupUserSaga);
}
