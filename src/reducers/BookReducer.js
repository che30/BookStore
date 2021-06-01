import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const BookReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        payload: action.payload,
      };
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload.id);
    default:
      return state;
  }
};
export default BookReducer;
