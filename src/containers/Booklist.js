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
      <nav className="d-flex justify-content-around w-50 align-items-center">
        <div className="h1 text-primary">Bookstore CMS</div>
        <div>Books </div>
        <CategoryFilter changeFilter={changeFilter} />
      </nav>
      <section className="all-books">
        <ul className="list-unstyled">
          <li>Actions</li>
          <li>Hunger games</li>
          <li>Collins</li>
        </ul>
        <ul className="d-flex list-unstyled">
          <li>comments</li>
          <span>|</span>
          <li>Remove</li>
          <span>|</span>
          <li>edit</li>
        </ul>
        <div className="Oval-2" />
      </section>
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
            <Book book={book} key={book.id} removeBook={removeBook} />
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
  changeFilter: (category) => dispatch(ChangeFilter(category)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
