/* 
 *
 * Unit tests for New Home Screen
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { NewHomeScreen } from './index.js';

test('Renders...', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewHomeScreen />, div);
});

test('Renders correctly', () => {
  const component = renderer.create(<NewHomeScreen />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

