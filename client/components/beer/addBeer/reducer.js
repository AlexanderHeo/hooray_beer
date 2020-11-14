import * as actionTypes from '../../../store/actionTypes'

const initialState = {
  beerData: {
    name: '',
    brewery: '',
    rating: 0,
    note: '',
    bar: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BEER_DATA_SUCCESS:
      return {
        ...state,
        beerData: {
          ...state.beerData,
          name: action.name,
          brewery: action.brewery,
          rating: action.rating,
          note: action.note,
          bar: action.bar
        }
      }
    default:
      return state
  }
}

export default reducer
