import { GET_PAGE_TITLE } from '../types'

export const changePageTitle = (title) => {
    
    return (dispatch) => {
        
        dispatch({
            type : GET_PAGE_TITLE,
            payload : title
        })
    }
    
}