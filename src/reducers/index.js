import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import FilterReducer from './FilterReducer';

const rootReducer = combineReducers({
  books: BookReducer,
  filter: FilterReducer,
});

export default rootReducer;
