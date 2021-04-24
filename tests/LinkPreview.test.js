/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import LinkPreview from '../client/src/components/LinkPreview.jsx';

const props = {
  imageUrl: 'www.yahoo.com/12313123123', title: 'Hello World', description: 'This is a news story', link: 'www.yahoo.com/12313123123',
};

describe('LinkPreview', (props) => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LinkPreview debug />);

    expect(component).toMatchSnapshot();
  });
});
