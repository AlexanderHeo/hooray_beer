import * as actionTypes from '../../store/actionTypes'

export const getBreweryListSuccess = brewerylist => {
  return {
    type: actionTypes.GET_BREWERY_LIST_SUCCESS,
    breweryList: brewerylist
  }
}
export const getBreweryListFail = error => {
  return {
    type: actionTypes.GET_BEER_LIST_FAIL,
    error: error
  }
}
export const getBreweryList = () => {
  return dispatch => {
    fetch('/api/brewery')
      .then(response => response.json())
      .then(data => dispatch(getBreweryListSuccess(data)))
      .catch(error => dispatch(getBreweryListFail(error)))
  }
}
