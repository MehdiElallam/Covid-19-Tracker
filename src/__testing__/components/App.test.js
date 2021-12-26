import React from "react";
import { shallow } from 'enzyme';
import App from "../../../src/App";
import {Provider} from 'react-redux';
import store from "../../redux/store" 
import { changePageTitle } from '../../redux/actions/appInfos'
import { fetchCountryHistorical } from "../../redux/actions/countryDetails"


import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("Rendring App component", () => {
    
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            historical : {},
        });

        store.dispatch = jest.fn();

        component = shallow(
            <Provider store={store}>
                <App />
            </Provider>   
        );
    });

    it('should dispatch an action on mount', () => {
        store.dispatch(fetchCountryHistorical())
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should render with given state from Redux store', () => {
        expect(component).toMatchSnapshot();
    });

    

});