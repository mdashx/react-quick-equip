/* 
 *
 * Unit tests for {{titleCase name}}
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { {{properCase name}} } from './index.js';

test('Renders...', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{properCase name}} />, div);
});

test('Renders correctly', () => {
  const component = renderer.create(<{{properCase name}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

