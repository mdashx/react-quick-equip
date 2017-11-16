import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { CreateList } from 'containers/CreateList';

test('Renders...', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateList />, div);
});

test('Renders correctly', () => {
  const component = renderer.create(<CreateList />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
