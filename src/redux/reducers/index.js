import { combineReducers } from 'redux'
import markersReducer from './markersReducer'

const rootReducer = combineReducers({
    markersReducer,
})

export default rootReducer
