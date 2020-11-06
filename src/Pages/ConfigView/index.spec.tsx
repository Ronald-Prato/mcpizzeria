import React from 'react';

import 'jest-enzyme';
import 'jest-styled-components';

import { mount } from 'enzyme';

import ConfigView from './index';

let cView: any;

beforeAll(() => {
  cView = mount(
    <ConfigView />
  );
});

describe('<ConfigView />', () => {
  it('should render the whole component', () => {
    expect(cView.find('div.main-wrapper').exists()).toBeTruthy();
    expect(cView.find('section.pizza-container').exists()).toBeTruthy();
    expect(cView.find('img.pizza-img').exists()).toBeTruthy();
    expect(cView.find('section.main-content').exists()).toBeTruthy();
    expect(cView.find('section.card').exists()).toBeTruthy();
    expect(cView.find('div.back-icon-container').exists()).toBeTruthy();
    expect(cView.find('div.user-img-container').exists()).toBeTruthy();
    expect(cView.find('img.user-img').exists()).toBeTruthy();
    expect(cView.find('p.user-name').exists()).toBeTruthy();
    expect(cView.find('p.user-email').exists()).toBeTruthy();
    expect(cView.find('div.edit-icon-container').exists()).toBeTruthy();
  })
})
