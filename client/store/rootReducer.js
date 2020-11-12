import { combineReducers } from 'redux';
import beerReducer from '../components/beer/reducer';
import breweryReducer from '../components/brewery/reducer';
import viewReducer from '../components/reducer';

const rootReducer = combineReducers({
  viewReducer,
  beerReducer,
  breweryReducer
});

export default rootReducer;
