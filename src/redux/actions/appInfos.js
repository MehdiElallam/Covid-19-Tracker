import { GET_PAGE_TITLE, DEFAULT_COUNTRY } from '../types'

export const changePageTitle = (title) => {
    
    return (dispatch) => {
        
        dispatch({
            type : GET_PAGE_TITLE,
            payload : title
        })
    }
    
}

export const changeDefaultCountryCode = (code) => {
    
    return (dispatch) => {
        
        dispatch({
            type : DEFAULT_COUNTRY,
            payload : code
        })
    }
    
}