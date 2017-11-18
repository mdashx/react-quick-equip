import { call, put, select, takeLatest } from 'redux-saga/effects';

import { fetchGithubUser } from 'clients/github';

import { updateUsernameRepos } from './actions';
import { LOOKUP_USERNAME } from './constants';
import { makeMostRecentUser } from './selectors';

import { store } from 'app';

export function* fetchUserSaga(apiRequest) {
  const username = yield select(makeMostRecentUser());
  try {
    const response = yield call(apiRequest, username);
    yield put(updateUsernameRepos(username, response.data));
  } catch (err) {
    if (err.response) {
      yield put(
        updateUsernameRepos(username, [
          { name: `Lookup failed: ${err.response.statusText}` },
        ])
      );
    } else {
      yield put(
        updateUsernameRepos(username, [{ name: `Lookup failed: ${err}` }])
      );
    }
  }
}

export function* foundUserWatcher() {
  yield takeLatest(LOOKUP_USERNAME, fetchUserSaga, fetchGithubUser);
}
