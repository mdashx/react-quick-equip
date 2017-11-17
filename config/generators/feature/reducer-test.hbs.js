import reducer, { initialState } from './reducer';
import * as constants from './constants';

describe('{{ camelCase name }} reducer', () => {
  test('Should return intial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
