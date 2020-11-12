import * as actionTypes from '../store/actionTypes'

const initialState = {
  view: 'intro'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VIEW:
      return {
        ...state,
        view: action.view
      }
    default:
      return state
  }
}

export default reducer
