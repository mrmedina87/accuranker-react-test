import {
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  FAIL_REQUEST_EMPLOYEES
} from '../actions/types';

export const employees = (
  state = {
    isFetching: false,
    items: [],
    error: false
  }, action) => {
  switch (action.type) {
    case REQUEST_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.employees
      });
    case FAIL_REQUEST_EMPLOYEES: 
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });
    default:
      return state;
  };
};