import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreateBook, RemoveBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ book }) => {
  <div>
    <table>
      <thead>

        <tr>
          <th>
            Title
          </th>
          <th>
            Book ID
          </th>
          <th>
            Category
          </th>
        </tr>
      </thead>
      <tbody>
        {book.map((book) => <Book key={book} book={book} />)}
      </tbody>
    </table>

  </div>;
};
BookList.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateProps = (state) => ({
  books: state.books,

});
const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(CreateBook(book)),
  delete: (book) => dispatch(RemoveBook(book)),
});
export default connect(mapStateProps, mapDispatchToProps)(BookList);
