import React from 'react';

import 'jest-enzyme';
import 'jest-styled-components';

import { mount } from 'enzyme';

import RestaurantsList from './index';
import { sampleStore } from '../../constants';

let mScreen: any;

const showSingleStoreMock = jest.fn();
const signOutMock = jest.fn();

const initialProps = {
  stores: [sampleStore, sampleStore],
  showSingleStore: showSingleStoreMock,
  hideListClass: '',
  signOut: signOutMock
};

beforeAll(() => {
  mScreen = mount(
    <RestaurantsList {...initialProps}/>
  );
});

describe('<RestaurantsList />', () => {
  it ('should render the whole component', () => {
    expect(mScreen.find('div.main-wrapper').exists()).toBeTruthy();
    expect(mScreen.find('section.about-section').exists()).toBeTruthy();
    expect(mScreen.find('div.account-icon-container').exists()).toBeTruthy();
    expect(mScreen.find('div.profile-picture').exists()).toBeTruthy();
    expect(mScreen.find('section.main-section').exists()).toBeTruthy();
    expect(mScreen.find('div.category-container').exists()).toBeTruthy();
    expect(mScreen.find('p.category-message').exists()).toBeTruthy();
    expect(mScreen.find('div.underline').exists()).toBeTruthy();
    expect(mScreen.find('p.store-title').exists()).toBeTruthy();
    expect(mScreen.find('p.store-subtitle').exists()).toBeTruthy();
    expect(mScreen.find('div.search-bar-container').exists()).toBeTruthy();
    expect(mScreen.find('input.search-bar').exists()).toBeTruthy();
    expect(mScreen.find('div.stores-container').exists()).toBeTruthy();
    expect(mScreen.find('div.single-store').exists()).toBeTruthy();
    expect(mScreen.find('p.single-store-address').exists()).toBeTruthy();
    expect(mScreen.find('p.single-store-name').exists()).toBeTruthy();
    expect(mScreen.find('img.single-store-icon').exists()).toBeTruthy();
  });

  it ('should render the "not results" view when no results appear', () => {
    mScreen.find('input.search-bar').simulate('change', { target: { value: 'xsSna-23!' } });
    expect(mScreen.find('div.no-results-container').exists()).toBeTruthy();
    expect(mScreen.find('p.no-results-message').exists()).toBeTruthy();
    expect(mScreen.find('img.single-store-icon').exists()).toBeTruthy();
  });

  it ('should call the showSingleStoreMock method by clicking a store', () => {
    mScreen.find('div.single-store').at(0).simulate('click');
    expect(showSingleStoreMock).toHaveBeenCalled();
  });
});