import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

export const randInt = (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const BookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.book.id);
    default:
      return state;
  }
};
export default BookReducer;
