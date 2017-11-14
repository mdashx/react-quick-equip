import { call, put, select, takeLatest } from 'redux-saga/effects';

import { fetchGithubUser } from 'clients/github';
import { makeMostRecentUser } from './selectors';
import { LOOKUP_USERNAME } from './constants';

import { store } from 'app';

function* foundUserSaga() {
  const username = yield select(makeMostRecentUser());
  console.log(username);
  const state = store.getState();
  console.log(state);
  console.log(state.foundUser.toJS());

  try {
    const response = yield call(fetchGithubUser, username);
    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.log(err.response);
    } else {
      console.log(err);
    }
  }
}

export function* foundUserWatcher() {
  yield takeLatest(LOOKUP_USERNAME, foundUserSaga);
}
