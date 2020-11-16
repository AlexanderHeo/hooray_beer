import { combineReducers } from 'redux'
import beer from '../components/beer/reducer'
import view from '../components/reducer'

const rootReducer = combineReducers({
  view,
  beer
})

export default rootReducer
