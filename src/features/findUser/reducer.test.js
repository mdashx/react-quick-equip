import reducer, { initialState } from './reducer';
import * as constants from './constants';

describe('findUser reducer', () => {
  test('Should return intial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  test('Should add user to list', () => {
    const state = reducer(initialState, { type: constants.ADD_USER_TO_LIST, username: 'tom' });
    const usernames = state.toJS().usernames;
    expect(usernames).toEqual(['tom']);
  });
});
