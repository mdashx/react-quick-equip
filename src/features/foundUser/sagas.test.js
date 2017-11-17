/* 
 * 
 * Saga tests for Found User
 * 
 */

import * as sagas from './sagas';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeMostRecentUser } from './selectors';

describe('Found User sagas', () => {
  describe('fetchUserSaga', () => {
    test('selects username', () => {
      const generator = sagas.fetchUserSaga();
      const selectAction = JSON.stringify(generator.next().value);
      const expected = JSON.stringify(select(makeMostRecentUser()));
      expect(selectAction).toEqual(expected);
    });
  });
});
