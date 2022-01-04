import { GET_PAGE_TITLE, DEFAULT_COUNTRY } from '../types'
 
const initialState = {
    infos : {
        title : 'Daily update',
        countryCode : 'UK'
    }
}

export default function appReducer (state = initialState, action){
    switch(action.type){
        case GET_PAGE_TITLE:
            return {
                ...state,
                infos : {
                    ...state.infos,
                    title : action.payload
                }
                
            }

        case DEFAULT_COUNTRY:
                return {
                    ...state,
                    infos : {
                        ...state.infos,
                        countryCode : action.payload
                    }
                    
                }
        
        default: return state
    }

}
