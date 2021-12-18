import { combineReducers } from 'redux'
import worldCountries from './worldCountries'
import countryDetails from './countryDetails'
import appInfos from './appInfos'
import vaccinationDetails from './vaccinationDetails'

export default combineReducers({
  app : appInfos,
  worldCountries,
  countryDetails,
  vaccinationDetails,
})