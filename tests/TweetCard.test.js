/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TweetCard from '../client/src/components/TweetCard.jsx';

describe('TweetCard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TweetCard debug />);

    expect(component).toMatchSnapshot();
  });
});
