/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { CreateBook } from '../actions';

const BookForm = ({ create }) => {
  const bookCataegories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
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
      <form>
        <label htmlFor="titleInput">
          Book title:
          <input type="text" id="title-input" onChange={handleChange} value={bookInfo.title} />
        </label>
        <label htmlFor="cateSelect">
          Select the Category:
          <select id="cateSelect" onChange={handleChange} value={bookInfo.category}>
            {bookCataegories.map((cat) => (
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
