import {GET_WORLD_COUNTRIES_REQUEST, GET_WORLD_COUNTRIES_SUCCESS, GET_WORLD_COUNTRIES_ERROR} from '../types'
 
const initialState = {
    countries : []
}

export default function (state = initialState, action){

    switch(action.type){

        case GET_WORLD_COUNTRIES_REQUEST:
            return {
                ...state,
                loading : true
            }

        case GET_WORLD_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries : action.payload,
                loading : false
            }

        case GET_WORLD_COUNTRIES_ERROR:
            return {
                ...state,
                error : action.payload,
                countries : [],
                loading:false
            }
        
        default: return state
    }

}
