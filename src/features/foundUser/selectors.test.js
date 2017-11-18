import { fromJS } from 'immutable';
import * as selectors from './selectors';

const mockStateOne = {
  foundUser: fromJS({
    history: ['username3', 'username2', 'username1'],
    foundRepos: {
      username1: 'repo 1',
      username2: 'repo 2',
      username3: 'repo 3',
    },
  }),
};

describe('selectors', () => {
  describe('select Found User', () => {
    test('should select substate from the main state', () => {
      const state = { foundUser: '' };
      const expected = '';
      expect(selectors.selectFoundUser(state)).toEqual(expected);
    });
  });
  describe('select most recent repos', () => {
    test('shoud select repo that matches the first in the history', () => {
      const selector = selectors.makeMostRecentRepos();
      const expected = 'repo 3';
      expect(selector(mockStateOne)).toEqual(expected);
    });
  });
});
