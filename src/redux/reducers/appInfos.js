import {GET_PAGE_TITLE } from '../types'
 
const initialState = {
    infos : {
        title : 'Home'
    }
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_PAGE_TITLE:
            return {
                ...state,
                infos : {
                    ...state.infos,
                    title : action.payload
                }
                
            }
        
        default: return state
    }

}
