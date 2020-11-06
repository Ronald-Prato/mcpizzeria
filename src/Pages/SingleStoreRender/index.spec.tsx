import React from 'react';

import 'jest-enzyme';
import 'jest-styled-components';

import { mount } from 'enzyme';

import SingleStoreRender from './index';
import { sampleStore } from '../../constants';

let singleStoreRender: any;

const backToLisMock = jest.fn();

const initialProps = {
  store: sampleStore,
  backToList: backToLisMock
};

beforeAll(() => {
  singleStoreRender = mount(
    <SingleStoreRender {...initialProps }/>
  );
});

describe('<SingleStoreRender />', () => {
  it('should render the whole component', () => {
    expect(singleStoreRender.find('div.main-wrapper').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.back-icon-container').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.card-container').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.card').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.circle').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.image-container').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.store-img').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.info').exists()).toBeTruthy();
    expect(singleStoreRender.find('p.store-name').exists()).toBeTruthy();
    expect(singleStoreRender.find('p.store-address').exists()).toBeTruthy();
    expect(singleStoreRender.find('p.store-description').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.social-media-container').exists()).toBeTruthy();
    expect(singleStoreRender.find('a.icon-insta').exists()).toBeTruthy();
    expect(singleStoreRender.find('a.icon-face').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.products-container').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.single-product').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.product-img').exists()).toBeTruthy();
    expect(singleStoreRender.find('div.product-info').exists()).toBeTruthy();
    expect(singleStoreRender.find('p.product-name').exists()).toBeTruthy();
  });

  it ('should call the backToList method by clicking the back icon', () => {
    singleStoreRender.find('div.back-icon-container').simulate('click');
    expect(backToLisMock).toHaveBeenCalled();
  });
})