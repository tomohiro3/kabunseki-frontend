import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../pages/search';

describe('Sample.jsx', () => {
  test('show h1', () => {
    const wrapper = shallow(<Search />);
    console.log(wrapper.debug());
  })

})