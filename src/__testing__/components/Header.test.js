import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header testing', () => {
  
  it('Header should render correctly', () => {
    const component = shallow(<Header />);
  
    expect(component).toMatchSnapshot();
  });
});