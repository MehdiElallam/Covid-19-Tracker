import {
    GET_COUNTRY_DATA_REQUEST, 
    GET_COUNTRY_DATA_SUCCESS, 
    GET_COUNTRY_DATA_ERROR,
    GET_COUNTRY_HISTORICAL_REQUEST,
    GET_COUNTRY_HISTORICAL_SUCCESS,
    GET_COUNTRY_HISTORICAL_ERROR

} from '../types'
import { instance } from '../../utils/config'

export const fetchCountryDataRequest = () => {
    return {
        type : GET_COUNTRY_DATA_REQUEST,
    }
}

export const fetchCountryDataSuccess = (data) => {
    return {
        type : GET_COUNTRY_DATA_SUCCESS,
        payload : data
    }
}

export const fetchCountryDataError = (error) => {
    return {
        type : GET_COUNTRY_DATA_ERROR,
        payload : error
    }
}

export const fetchCountryData = (country) => {
    
    return async(dispatch) => {
        
        dispatch(fetchCountryDataRequest)
        try {
            const countryDetails = await instance.get(`/countries/${country}`)
            dispatch(fetchCountryDataSuccess(countryDetails.data))
        }
        catch(error) {
            
            const errorMsg = error.message
            dispatch(fetchCountryDataError(errorMsg))
        }
    }
    
}

export const fetchCountryHistoricalRequest = () => {
    return {
        type : GET_COUNTRY_HISTORICAL_REQUEST,
    }
}

export const fetchCountryHistoricalSuccess = (data) => {
    return {
        type : GET_COUNTRY_HISTORICAL_SUCCESS,
        payload : data
    }
}

export const fetchCountryHistoricalError = (error) => {
    return {
        type : GET_COUNTRY_HISTORICAL_ERROR,
        payload : error
    }
}

export const fetchCountryHistorical = (country) => {
    
    return async(dispatch) => {
        
        dispatch(fetchCountryHistoricalRequest)
        try {
            const countryHistorical = await instance.get(`/historical/${country}?lastdays=365`)
            dispatch(fetchCountryHistoricalSuccess(countryHistorical.data))
        }
        catch(error) {
            
            const errorMsg = error.message
            dispatch(fetchCountryHistoricalError(errorMsg))
        }
    }
    
}