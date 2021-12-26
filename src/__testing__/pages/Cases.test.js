import React from 'react';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux';
import Cases from '../../pages/Cases';
import { changePageTitle } from '../../redux/actions/appInfos'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("Rendring Cases page", () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            country : {},
        });

        store.dispatch = jest.fn();

        component = shallow(
            <Provider store={store}>
                <Cases />
            </Provider>   
        );
    });

    it('should render with given state from mocked redux store', () => {
        expect(component).toMatchSnapshot();
    });

    it('should dispatch an action on Load', () => {
        store.dispatch(changePageTitle('Cases'))
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

});