import { fromJS } from 'immutable';
import * as selectors from './selectors';

describe('selectors', () => {
  describe('select Found User', () => {
    test('should select substate from the main state', () => {
      const state = { {{ camelCase name }}: ''};
      const expected = '';
      expect(selectors.select{{ properCase name}}(state)).toEqual(expected);
    });
    test('should include tests using a mock state', () => {
      expect(true).toEqual(false);
    });
  });
});
