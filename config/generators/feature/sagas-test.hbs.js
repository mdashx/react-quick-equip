/* 
 * 
 *  Saga tests for {{ titleCase name }}
 * 
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as sagas from './sagas';

describe('sagas', () => {
  describe('defaultSaga', () => {
    test('Final effect should be a `call` to our anonymous function', () => {
      const generator = sagas.defaultSaga();
      let sagaEffect;
      for (const value of generator) {
        sagaEffect = value;
      }
      const expected = JSON.stringify(call((msg) => console.log(msg), 'test me'));
      expect(JSON.stringify(sagaEffect)).toEqual(expected);
    });
  });
});
