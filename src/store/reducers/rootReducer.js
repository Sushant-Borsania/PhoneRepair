import phoneReducers from './phoneReducers';
import userSelections from './userSelections';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  phoneReducers:phoneReducers,
  userSelections:userSelections
})

export default rootReducer;