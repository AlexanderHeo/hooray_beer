import * as actionTypes from '../../store/actionTypes';

export const getBeerListSuccess = beerList => {
  return {
    type: actionTypes.GET_BEER_LIST_SUCCESS,
    beerList: beerList
  };
};
export const getBeerListFail = error => {
  return {
    type: actionTypes.GET_BEER_LIST_FAIL,
    error: error
  };
};
export const getBeerList = () => {
  return dispatch => {
    fetch('/api/beer')
      .then(response => response.json())
      .then(data => {
        dispatch(getBeerListSuccess(data));
      })
      .catch(error => {
        dispatch(getBeerListFail(error));
      });
  };
};

export const removeBeerSuccess = beerList => {
  console.log('removebeersuccess')
  return {
    type: actionTypes.REMOVE_BEER_SUCCESS,
    beerList: beerList
  };
};
export const removeBeerFail = error => {
  return {
    type: actionTypes.REMOVE_BEER_FAIL,
    error: error
  };
};
export const removeBeer = beerID => {
  return (dispatch, getState) => {
    console.log('removebeer')
    fetch(`/api/beer/${beerID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => null)
      .then(data => {
        const ogBeerList = getState().beer.beerList;
        const beerListCopy = [...ogBeerList];
        const index = beerListCopy.findIndex(beers => beers.beerID === beerID);
        beerListCopy.splice(index, 1);
        console.log('beerListCopy:', beerListCopy)
        dispatch(removeBeerSuccess(beerListCopy));
      })
      .catch(error => {
        dispatch(removeBeerFail(error))
      })
  }
}

export const setEditBeer = beer => {
  return {
    type: actionTypes.SET_EDIT_BEER,
    beerToEdit: beer
  };
};

export const editBeerSuccess = beerList => {
  return {
    type: actionTypes.EDIT_BEER_SUCCESS,
    beerList: beerList
  };
};
export const editBeerFail = error => {
  return {
    type: actionTypes.EDIT_BEER_FAIL,
    error: error
  };
};
export const editBeer = beer => {
  return (dispatch, getState) => {
    const beerID = beer.beerID;
    fetch(`/api/beer/${beer.beerID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(beer)
    })
      .then(response => response.json())
      .then(data => {
        const ogBeerList = getState().beer.beerList;
        const beerListCopy = [...ogBeerList];
        const index = beerListCopy.findIndex(beers => beers.beerID === beerID);
        beerListCopy.splice(index, 1, data);
        dispatch(editBeerSuccess(beerListCopy));
      })
      .catch(error => console.error('error:', error));
  };
};
