import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from 'containers/Loading';

test('Renders...', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
});

test('Renders correctly', () => {
  const component = renderer.create(<Loading />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
