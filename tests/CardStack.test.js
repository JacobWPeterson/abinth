/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CardStack from '../client/src/components/CardStack.jsx';
import TweetCard from '../client/src/components/TweetCard.jsx';

import dummyData from '../dummyData/mostInteractions.js';

const props = { tweets: dummyData.mostInteractions };

describe('CardStack', () => {
  const component = shallow(<CardStack {...props} debug />);
  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });
});
