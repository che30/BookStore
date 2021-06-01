import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CreateBook, RemoveBook } from '../actions';
import Book from '../components/Book';
const BookList =({book})=>{
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
    {/* <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td> */}
      <tbody>
      {book.map((book) => <Book key={book} book={book} />)}
    </tbody>
  </table>
  
</div>
}
BookList.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateProps = (state) => {
  return{
    Title: state.title,
    id: state.id,
    category: state.category

  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    create: (book)=>dispatch(CreateBook(book)),
    delete: (book)=>dispatch(RemoveBook(book))
  }
}
export default connect(mapStateProps, mapDispatchToProps)(BooksList);