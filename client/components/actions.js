import * as actionTypes from '../store/actionTypes';

export const setView = view => {
  return {
    type: actionTypes.SET_VIEW,
    view: view
  };
};
