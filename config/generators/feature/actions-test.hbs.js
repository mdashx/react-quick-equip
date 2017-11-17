import *  as actions from './actions';
import * as constants from './constants';

describe('actions', () => {
  describe('Default Action', () => {
    test('should use the correct type', () => {
      const expected = constants.DEFAULT_ACTION;
      expect(actions.defaultAction().type).toEqual(expected);
    });
  });
});
