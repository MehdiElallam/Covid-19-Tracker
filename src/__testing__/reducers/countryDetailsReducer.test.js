import reducer from '../../redux/reducers/countryDetails'
import {
    GET_COUNTRY_DATA_REQUEST, 
    GET_COUNTRY_DATA_SUCCESS, 
    GET_COUNTRY_DATA_ERROR, 
} from '../../redux/types'


const initialState = {
    countryLoading : true,
    historicalLoading : true,
    country : {},
    historical : {}
}

const total = {
    cases : {},
    deaths : 10
}

describe('Country reducer', () => {
    
    it('Returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle GET_COUNTRY_DATA_REQUEST', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_DATA_REQUEST,
        })
        ).toEqual(initialState);
    })

    it('Should handle GET_COUNTRY_DATA_SUCCESS', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_DATA_SUCCESS,
            payload : total
        })
        ).toEqual({
            ...initialState,
            country : {
                ...initialState.country,
                total
            },
            countryLoading : false
        });
    })

    it('Should handle GET_COUNTRY_DATA_ERROR', () => {
        expect(
        reducer(initialState,
        {
            type: GET_COUNTRY_DATA_ERROR,
            payload : 'Error Test'
        })
        ).toEqual({
            ...initialState,
            error : 'Error Test',
            country : {
                ...initialState.country,
                total : {}
            },
            countryLoading : false
        });
    })
        
})