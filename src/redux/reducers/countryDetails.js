import {
    GET_COUNTRY_DATA_REQUEST, 
    GET_COUNTRY_DATA_SUCCESS, 
    GET_COUNTRY_DATA_ERROR,
    GET_COUNTRY_HISTORICAL_REQUEST,
    GET_COUNTRY_HISTORICAL_SUCCESS,
    GET_COUNTRY_HISTORICAL_ERROR

} from '../types'
 
const initialState = {
    countryLoading : true,
    historicalLoading : true,
    country : {},
    historical : {}
}

export default function (state = initialState, action){

    switch(action.type){

        case GET_COUNTRY_DATA_REQUEST:
            return {
                ...state,
                countryLoading : true
            }

        case GET_COUNTRY_DATA_SUCCESS:
            return {
                ...state,
                country : {
                    ...state.country,
                    total : action.payload
                },
                countryLoading : false
            }

        case GET_COUNTRY_DATA_ERROR:
            return {
                ...state,
                error : action.payload,
                country : {
                    ...state.country,
                    total : {}
                },
                countryLoading:false
            }

        case GET_COUNTRY_HISTORICAL_REQUEST:
            return {
                ...state,
                historicalLoading : true
            }

        case GET_COUNTRY_HISTORICAL_SUCCESS:
            return {
                ...state,
                country : {
                    ...state.country,
                    historical : action.payload
                },
                historicalLoading : false
            }

        case GET_COUNTRY_HISTORICAL_ERROR:
            return {
                ...state,
                error : action.payload,
                country : {
                    ...state.country,
                    historical : {}
                },
                historicalLoading:false
            }
        
        default: return state
    }

}
