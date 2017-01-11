import React from 'react';
import { shallow } from 'enzyme';
import MaeveInput from '../index.js';

test('render maeve input', () => {
  const component = shallow(
    <MaeveInput />
  );
  expect(component).toMatchSnapshot();
});