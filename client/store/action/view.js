import * as actionTypes from '../actionTypes';

export const setView = view => {
  return {
    type: actionTypes.SET_VIEW,
    view: view
  };
};
