import {GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_ERROR} from '../types'
 
const initialState = {
    countries : [],
    error : ''
}

export default function (state = initialState, action){

    switch(action.type){

        case GET_COUNTRIES_REQUEST:
            return {
                ...state,
                loading : true
            }

        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries : action.payload,
                loading : false
            }

        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                error : action.payload,
                countries : [],
                loading:false
            }
        
        default: return state
    }

}
