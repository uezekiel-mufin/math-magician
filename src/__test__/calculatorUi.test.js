/* eslint-disable no-undef */
import * as React from 'react'
import Calculator from "../components/calculatorUi";
import renderer from 'react-test-renderer';

test('shows the children when the checkbox is checked', () => {
  const tree = renderer
  .create(<Calculator/>)
  .toJSON();
  expect(tree).toMatchSnapshot();

})