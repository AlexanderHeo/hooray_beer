import * as actionTypes from '../../store/actionTypes'

const initalState = {
  breweryList: [],
  breweryListLoaded: false,
  breweryListLoadFail: false
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_BREWERY_LIST_SUCCESS:
      return {
        ...state,
        breweryListLoaded: true,
        breweryList: action.breweryList
      }
    case actionTypes.GET_BREWERY_LIST_FAIL:
      return {
        ...state,
        breweryListLoadFail: true
      }
    default:
      return state
  }
}

export default reducer
