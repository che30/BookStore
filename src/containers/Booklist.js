import React from 'react';
import PropTypes from 'prop-types';
const BookList =({book})=>{
<div>
  <table>
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
    <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
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

export  default BookList