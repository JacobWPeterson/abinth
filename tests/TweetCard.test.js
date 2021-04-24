/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import TweetCard from '../client/src/components/TweetCard.jsx';
import dummyTweet from '../dummyData/dummyTweet.js';

describe('TweetCard', () => {
  const component = mount(<TweetCard tweet={dummyTweet.tweet} screensize="314" debug />);
  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });
});
