/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RemoveBook, ChangeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import './Booklist.css';

const BookList = ({
  books, filter, changeFilter, removeBook,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter((book) => book.category === filter) : books;
  return (

    <div>
      <nav className="d-flex justify-content-between container-fluid bg-white  py-4">
        <div className="d-flex justify-content-around  w-50 align-items-center ">
          <div className="h3 cms">Bookstore CMS</div>
          <div className="navbar-books">Books </div>
          <CategoryFilter changeFilter={changeFilter} />
        </div>

        <div className="avatar  bg-white">
          <i className="fas fa-user-alt text-primary" />
        </div>
      </nav>
      {filteredBooks.map((book) => (
        <Book book={book} key={book.id} removeBook={removeBook} />
      ))}

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
  changeFilter: (category) => dispatch(ChangeFilter(category)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
