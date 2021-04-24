/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import LinkPreview from '../client/src/components/LinkPreview.jsx';

const props1 = {
  imageUrl: 'www.yahoo.com/12313123123', title: 'Hello World', description: 'This is a news story', link: 'www.yahoo.com/12313123123',
};

const props2 = {
  imageUrl: 'www.yahoo.com/12313123123', title: 'Hello World', description: 'This is a news story', link: 'www.yahoo.nz/12313123123',
};

describe('LinkPreview', () => {
  const component = mount(<LinkPreview {...props1} debug />);
  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });

  const linkArea = component.find('div').at(1).children().at(2).text();

  it('should render link correctly when link includes .com', () => {
    expect(linkArea).toEqual('🔗www.yahoo.com');
  });
});

describe('LinkPreview', () => {
  const component = mount(<LinkPreview {...props2} debug />);
  const linkArea = component.find('div').at(1).children().at(2).text();
  it('should render link correctly when link includes .com', () => {
    expect(linkArea).toEqual(`🔗${props2.link}`);
  });
});
