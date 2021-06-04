import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (

  <div className="d-flex justify-content-around container bg-white mb-2 py-3 mt-4 s-2 ">
    <div>
      <ul className="list-unstyled">
        <li className="book-cat">
          {book.category}
        </li>
        <li className="h5 book-title">
          {book.title}
        </li>
        <li className="light-blue">
          Collins
        </li>
      </ul>

      <div className="d-flex list-unstyled">
        <div className="light-blue comment">comments</div>
        <button className="removebtn" type="submit" onClick={() => removeBook(book)}>Remove</button>
        <div className="light-blue edit">edit</div>
      </div>
    </div>
    <div className="d-flex oval-contain justify-content-between align-items-center ">
      <div className="Oval-2" />
      <ul className="list-unstyled">
        <li className="h4">
          63%
        </li>
        <li className="completed">
          Completed
        </li>
      </ul>
    </div>
    <div>
      <h6 className="current-chapter">CURRENT CHAPTER</h6>
      <h6 className="chapter">chapter 17</h6>
      <div className="btn btn-primary updateprogress">UPDATE PROGRESS</div>
    </div>
  </div>
);
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
