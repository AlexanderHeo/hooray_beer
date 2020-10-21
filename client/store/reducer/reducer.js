const initialState = {
  beers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BEER_LIST':
      return {
        ...state
      };
  }
};

export default reducer;
