import { combineReducers } from 'redux';

import { employees } from './employees';
import { about } from './about';

const rootReducer = combineReducers({
  about,
  employees
});

export default rootReducer;