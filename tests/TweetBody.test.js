/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CardStack from '../client/src/components/CardStack.jsx';

describe('CardStack', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardStack debug />);

    expect(component).toMatchSnapshot();
  });
});
