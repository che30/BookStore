/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreateBook, RemoveBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books, removeBook }) => (
  <table>
    <thead>

      <tr>
        <th>
          Book ID

        </th>
        <th>
          Title
        </th>
        <th>
          Category
        </th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => <Book key={book.id} book={book} removeBook={removeBook} />)}
    </tbody>
  </table>
);
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};
const mapStateProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(CreateBook(book)),
  removeBook: (book) => dispatch(RemoveBook(book)),
  // delete: (book) => dispatch(RemoveBook(book)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
