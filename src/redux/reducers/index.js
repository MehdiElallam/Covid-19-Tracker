import { combineReducers } from 'redux'
import covid from './covidReducer'

export default combineReducers({
  covid: covid
})