import {
  REQUEST_ABOUT,
  RECEIVE_ABOUT
} from '../actions/types';

export const about = (
  state = {
    isFetching: false,
    about: {}
  }, action) => {
  switch (action.type) {
    case REQUEST_ABOUT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ABOUT:
      return Object.assign({}, state, {
        isFetching: false,
        about: action.about
      });
    default:
      return state;
  };
};