import React from 'react';
import { shallow } from 'enzyme';
import CountrySelector from '../../components/CountrySelector';
import {Provider} from 'react-redux';
import store from "../../redux/store"
import configureStore from 'redux-mock-store';


const mockStore = configureStore([]);

describe('CountrySelector', () => {
      
      let store;
      let component;
      
      beforeEach(() => {
        store = mockStore({
            countries : [],
        });

        component = shallow(
            <Provider store={store}>
                <CountrySelector />
            </Provider>   
        );
    });
  
    // RENDERING TEST :
    it('Should render correctly', () => {
      expect(component).toMatchSnapshot();
    });

});