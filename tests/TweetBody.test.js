/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TweetBody from '../client/src/components/TweetBody.jsx';

describe('TweetBody', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TweetBody debug />);

    expect(component).toMatchSnapshot();
  });
});
