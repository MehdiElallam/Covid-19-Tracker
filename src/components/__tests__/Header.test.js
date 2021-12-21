import React from 'react';
import { configure, shallow } from 'enzyme';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header debug />);
  
    expect(component).toMatchSnapshot();
  });
});