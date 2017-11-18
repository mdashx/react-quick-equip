import * as actions from './actions';
import * as constants from './constants';

describe('actions', () => {
  describe('Update Username action', () => {
    test('should use the correct type', () => {
      const expected = constants.UPDATE_USERNAME;
      expect(actions.updateUsername().type).toEqual(expected);
    });
    test('should update the current username', () => {
      const username = 'tom';
      const expectedAction = {
        type: constants.UPDATE_USERNAME,
        username,
      };
      expect(actions.updateUsername(username)).toEqual(expectedAction);
    });
  });

  test('should add user to the list', () => {
    const username = 'tom';
    const expectedAction = {
      type: constants.ADD_USER_TO_LIST,
      username,
    };
    expect(actions.addUser(username)).toEqual(expectedAction);
  });
});
