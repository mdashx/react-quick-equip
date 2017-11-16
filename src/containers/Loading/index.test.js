import React from 'react';
import renderer from 'react-test-renderer';
import Loading from 'containers/Loading';

test('Loading shows message in h2 tag', () => {
  const component = renderer.create(<Loading />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

