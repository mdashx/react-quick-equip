/* 
 *
 * Unit tests for Search History
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { SearchHistory } from 'containers/SearchHistory';

test('Renders...', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchHistory />, div);
});

test('Renders correctly', () => {
  const component = renderer.create(<SearchHistory />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

