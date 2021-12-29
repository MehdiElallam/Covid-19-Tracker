import {
    GET_COUNTRY_VACCINATION_REQUEST, 
    GET_COUNTRY_VACCINATION_SUCCESS, 
    GET_COUNTRY_VACCINATION_ERROR,

} from '../types'
import { instance } from '../../utils/config'


export const fetchCountryVaccinationRequest = () => {
    return {
        type : GET_COUNTRY_VACCINATION_REQUEST,
    }
}

export const fetchCountryVaccinationSuccess = (data) => {
    return {
        type : GET_COUNTRY_VACCINATION_SUCCESS,
        payload : data
    }
}

export const fetchCountryVaccinationError = (error) => {
    return {
        type : GET_COUNTRY_VACCINATION_ERROR,
        payload : error
    }
}

export const fetchCountryVaccination = (country) => {
    
    return async(dispatch) => {
        
        dispatch(fetchCountryVaccinationRequest)
        try {
            const countryVaccination = await instance.get(`/vaccine/coverage/countries/${country}?lastdays=365`)
            dispatch(fetchCountryVaccinationSuccess(countryVaccination.data))
        }
        catch(error){
            const errorMsg = error
            dispatch(fetchCountryVaccinationError(errorMsg))
        }
    }
    
}