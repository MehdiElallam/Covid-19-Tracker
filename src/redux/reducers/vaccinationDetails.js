import {
    GET_COUNTRY_VACCINATION_REQUEST, 
    GET_COUNTRY_VACCINATION_SUCCESS, 
    GET_COUNTRY_VACCINATION_ERROR
} from '../types'

const initialState = {
    vaccination : {},
    loading : true,
    error : ""
}

export default function vaccinationDetailsReducer (state = initialState, action){

    switch(action.type){

        case GET_COUNTRY_VACCINATION_REQUEST:
            return {
                ...state,
                loading : true
            }

        case GET_COUNTRY_VACCINATION_SUCCESS:
            return {
                ...state,
                vaccination : action.payload,
                loading : false
            }

        case GET_COUNTRY_VACCINATION_ERROR:
            return {
                ...state,
                error : action.payload,
                vaccination : {},
                loading:false
            }
        
        default: return state
    }

}
