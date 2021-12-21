import React from 'react';
import { configure, shallow } from 'enzyme';
import CountrySelector from '../CountrySelector';
import {Provider} from 'react-redux';
import store from "../../redux/store"
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('CountrySelector', () => {
  it('Should render correctly in "debug" mode', () => {
    const component = shallow(
    <Provider store={store}>
        <CountrySelector debug />
    </Provider>);
    
  
    expect(component).toMatchSnapshot();
  });
});