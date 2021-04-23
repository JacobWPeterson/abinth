/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Images from '../client/src/components/Images.jsx';

describe('Images', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Images debug />);

    expect(component).toMatchSnapshot();
  });
});
