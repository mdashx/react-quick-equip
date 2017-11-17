/* 
 * 
 *  Saga tests for {{ titleCase name }}
 * 
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';

import * as sagas from './sagas';

describe('sagas', () => {
  describe('defaultSaga', () => {
    const generator = sagas.defaultSaga();
    test('should yield a `call` action', () => {
      const expected = JSON.stringify(call((msg) => console.log(msg), 'test me'));
      expect(JSON.stringify(generator.next().value)).toEqual(expected);
    });
  });
});
