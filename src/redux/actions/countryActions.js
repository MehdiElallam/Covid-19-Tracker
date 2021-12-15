import {GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_ERROR} from '../types'
import axios from 'axios'
import { url } from '../../utils/config'



export const fetchCountriesRequest = () => {
    return {
        type : GET_COUNTRIES_REQUEST
    }
}

export const fetchCountriesSuccess = (countries) => {
    return {
        type : GET_COUNTRIES_SUCCESS,
        payload : countries
    }
}

export const fetchCountriesError = (error) => {
    return {
        type : GET_COUNTRIES_ERROR,
        payload : error
    }
}

export const fetchCountries = () => {
    
    return (dispatch) => {
        
        dispatch(fetchCountriesRequest)
        
        axios.get(`${url}/countries`)
        .then(response => {
            
            const countries = response.data
            dispatch(fetchCountriesSuccess(countries))
        })
        .catch(error => {
            
            const errorMsg = error.message
            dispatch(fetchCountriesError(errorMsg))
        })
    }
    
}