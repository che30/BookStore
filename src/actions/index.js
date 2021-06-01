const CREATE_BOOK = 'CREATE BOOK';
const REMOVE_BOOK = 'REOVE BOOK';
const CreateBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});
const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id,

});
export {
  CreateBook, RemoveBook, CREATE_BOOK, REMOVE_BOOK,
};
