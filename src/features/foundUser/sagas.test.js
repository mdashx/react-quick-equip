/* 
 * 
 * Saga tests for Found User
 * 
 */

import * as sagas from './sagas';
import { UPDATE_USERNAME_REPOS } from './constants';

const mockRequestOne = username => {
  return Promise.resolve({ data: 'our data' });
};

describe('Found User sagas', () => {
  describe('fetchUserSaga', () => {
    test('final effect should be to put UPDATE_USERNAME_REPOS', () => {
      const generator = sagas.fetchUserSaga(mockRequestOne);
      let sagaEffect;
      for (const value of generator) {
        sagaEffect = value;
      }
      const expected = UPDATE_USERNAME_REPOS;
      expect(sagaEffect.PUT.action.type).toEqual(expected);
    });
  });
});
