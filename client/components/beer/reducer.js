import * as actionTypes from '../../store/actionTypes';

const initialState = {
  beerList: [],
  beerListLoaded: false,
  beerListLoadFail: false,
  beerToEdit: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BEER_LIST_SUCCESS:
      return {
        ...state,
        beerListLoaded: true,
        beerList: action.beerList
      };
    case actionTypes.GET_BEER_LIST_FAIL:
      return {
        ...state,
        beerListLoadFail: true
      };
    case actionTypes.REMOVE_BEER_SUCCESS:
      return {
        ...state,
        beerList: action.beerList
      };
    case actionTypes.REMOVE_BEER_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.SET_EDIT_BEER:
      return {
        ...state,
        beerToEdit: action.beerToEdit
      };
    case actionTypes.EDIT_BEER_SUCCESS:
      return {
        ...state,
        beerList: action.beerList,
        view: 'beerList'
      };
    case actionTypes.EDIT_BEER_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
