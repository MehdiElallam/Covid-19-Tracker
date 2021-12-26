import reducer from '../../redux/reducers/vaccinationDetails'
import {
    GET_COUNTRY_VACCINATION_REQUEST,
    GET_COUNTRY_VACCINATION_SUCCESS,
    GET_COUNTRY_VACCINATION_ERROR 
} from '../../redux/types'


const initialState = {
    vaccination : {},
    loading : true,
    error : ""
}

const vaccination = {
    country : 'UK',
    timeline : {}
}

describe('Vaccination reducer', () => {
    
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    
    it('Should handle GET_COUNTRY_VACCINATION_REQUEST', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_VACCINATION_REQUEST,
        })
        ).toEqual(initialState);
    })

    it('Should handle GET_COUNTRY_VACCINATION_SUCCESS', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_VACCINATION_SUCCESS,
            payload : vaccination
        })
        ).toEqual({
            ...initialState,
            loading: false,
            vaccination
        });
    })

    it('Should handle GET_COUNTRY_VACCINATION_ERROR', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_VACCINATION_ERROR,
            payload : 'Error Test'
        })
        ).toEqual({
            ...initialState,
            loading: false,
            error : 'Error Test'
        });
    })

    
})