const CREATE_BOOK = 'CREATE BOOK';
const REMOVE_BOOK = 'REOVE BOOK';
const CHANGE_FILTER = 'FILTER';
const CreateBook = (book) => ({
  type: CREATE_BOOK,
  book,
});
const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  book,

});
export {
  CreateBook, RemoveBook, CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER,
};
