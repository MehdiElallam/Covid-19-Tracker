import {
    GET_WORLD_COUNTRIES_REQUEST, 
    GET_WORLD_COUNTRIES_SUCCESS, 
    GET_WORLD_COUNTRIES_ERROR,
} from '../types';
import {instance } from '../../utils/config'



export const fetchWorldCountriesRequest = () => {
    return {
        type : GET_WORLD_COUNTRIES_REQUEST
    }
}

export const fetchWorldCountriesSuccess = (countries) => {
    return {
        type : GET_WORLD_COUNTRIES_SUCCESS,
        payload : countries
    }
}

export const fetchWorldCountriesError = (error) => {
    return {
        type : GET_WORLD_COUNTRIES_ERROR,
        payload : error
    }
}

export const fetchWorldCountries = () => {
    
    return async (dispatch) => {
        
        dispatch(fetchWorldCountriesRequest)
        try {
            const countries = await instance.get('/countries')
            dispatch(fetchWorldCountriesSuccess(countries.data))
        }
        catch(error){
            const errorMsg = error.message
            dispatch(fetchWorldCountriesError(errorMsg))
        }
    }   
}