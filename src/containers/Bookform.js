/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { CreateBook } from '../actions';

const BookForm = ({ create }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: 'Action',
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.id === 'title-input') {
      setBookInfo({ ...bookInfo, title: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, category: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    console.log(bookInfo.title);
    e.preventDefault();
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      create(bookInfo);
      setBookInfo({ title: '', category: '' });
    } else {
      console.log(bookInfo.category);
      setBookInfo({ ...bookInfo });
    }
  };
  return (
    <>
      <form>
        <label htmlFor="titleInput">
          Book title:
          <input type="text" id="title-input" onChange={handleChange} value={bookInfo.title} />
        </label>
        <label>
          Select the Category:
          <select onChange={handleChange} value={bookInfo.category}>
            {bookCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleSubmit}>Add a book</button>
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
