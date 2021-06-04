/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { CreateBook } from '../actions';
import './Bookform.css';

const BookForm = ({ create }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: 'Action',
  });
  const handleChange = (e) => {
    if (e.target.id === 'title-input') {
      setBookInfo({ ...bookInfo, title: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, category: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      create(bookInfo);
      setBookInfo({ title: '', category: '' });
    } else {
      setBookInfo({ ...bookInfo });
    }
  };
  return (
    <>
      <h6 className="add-new mt-5 h3">Add new book</h6>
      <form className="d-flex align-items-center justify-content-around pb-5">
        <label htmlFor="titleInput">
          <input placeholder="book title" type="text" id="title-input" onChange={handleChange} value={bookInfo.title} />
        </label>
        <label className="label">
          <select className="optionform" onChange={handleChange} value={bookInfo.category}>
            {bookCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="btn btn-primary " onClick={handleSubmit}>Add a book</button>
      </form>
    </>
  );
};
BookForm.propTypes = {
  create: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  create: (book) => { dispatch(CreateBook(book)); },
});
export default connect(null, mapDispatchToProps)(BookForm);
