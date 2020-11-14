import * as actionTypes from '../../../store/actionTypes'

export const addBeerDataFail = error => {
  return {
    type: actionTypes.ADD_BEER_DATA_FAIL,
    error
  }
}

export const addBeerDataSuccess = beerData => {
  return {
    type: actionTypes.ADD_BEER_DATA_SUCCESS,
    name: beerData.name,
    brewery: beerData.brewery,
    rating: beerData.rating,
    note: beerData.note,
    bar: beerData.bar
  }
}
