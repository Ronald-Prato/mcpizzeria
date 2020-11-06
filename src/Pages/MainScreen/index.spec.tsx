import React from 'react';

import 'jest-enzyme';
import 'jest-styled-components';

import { mount } from 'enzyme';

import MainScreen from './index';

let mScreen: any;

beforeAll(() => {
  mScreen = mount(
    <MainScreen />
  );
});