/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreateBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books }) => (
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
      {books.map((book) => <Book key={book.category} book={book} />)}
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
};
const mapStateProps = (state) => {
  console.log('Booklist');
  console.log(state);
  return {
    books: state.books,
  };
};
const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(CreateBook(book)),
  // delete: (book) => dispatch(RemoveBook(book)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
