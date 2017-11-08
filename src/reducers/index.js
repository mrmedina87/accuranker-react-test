import { combineReducers } from 'redux';

import {
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  REQUEST_ABOUT,
  RECEIVE_ABOUT
} from '../actions'

function employees(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.employees
      })
    default:
      return state
  }
}

function about(
  state = {
    isFetching: false,
    about: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_ABOUT:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ABOUT:
      return Object.assign({}, state, {
        isFetching: false,
        about: action.about
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  about,
  employees
});

export default rootReducer;