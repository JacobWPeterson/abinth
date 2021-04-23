/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CardStack from '../client/src/components/CardStack.jsx';
import TweetCard from '../client/src/components/TweetCard.jsx';

describe('CardStack', () => {
  const component = shallow(<CardStack debug />);
  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });
  const clickArea = component.find('div');
  const tweet = component.find(TweetCard);
  it('increases index when non-Tweet area is clicked', () => {
    clickArea.simulate('click');
    expect(changeIndex.mock.calls.length).toBe(1);
  });
  it('index does not increase when Tweet area is clicked', () => {
    tweet.simulate('click');
    expect(changeIndex.mock.calls.length).toBe(0);
  });
});
