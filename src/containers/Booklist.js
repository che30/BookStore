/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RemoveBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import FilterReducer from '../reducers/FilterReducer';

const BookList = ({
  books, filter, changeFilter, removeBook,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter((book) => book.category === filter) : books;
  return (

    <div>
      <CategoryFilter changeFilter={changeFilter} />
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
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              removeBook={removeBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
BookList.defaultProps = {
  filter: 'All',
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};
const mapStateProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(RemoveBook(book)),
  changeFilter: (filter) => dispatch(FilterReducer(filter)),
  // delete: (book) => dispatch(RemoveBook(book)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
