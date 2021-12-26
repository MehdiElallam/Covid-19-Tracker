import React from 'react';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux';
import Vaccinations from '../../pages/Vaccinations';
import { changePageTitle } from '../../redux/actions/appInfos'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("Rendring Vaccination page", () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            vaccination : {},
            loading : true,
            error : "",
            infos : {
                title : 'Home'
            }
        });

        store.dispatch = jest.fn();


        component = shallow(
            <Provider store={store}>
                <Vaccinations />
            </Provider>   
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component).toMatchSnapshot();
    });

    it('should dispatch an action on Load', () => {
        store.dispatch(changePageTitle('Vaccinations'))
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

});