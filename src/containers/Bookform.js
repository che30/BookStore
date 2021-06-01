/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { CreateBook } from '../actions';

const BookForm = ({ bookcreate }) => {
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
  const handleSubmit = () => {
    if (bookInfo.title !== '' && bookInfo.category !== '') {
      bookcreate(bookInfo);
      setBookInfo({ title: '', category: '' });
    } else {
      setBookInfo({ ...bookInfo });
    }
  };
  return (
    <div>
      <form>
        <label>
          Book title:
          <input type="text" id="title-input" onChange={handleChange} value={bookInfo.title} />
        </label>
        <label>
          Select the Category:
          <select id="cateSelect" onChange={handleChange} value={bookInfo.category}>
            {bookCataegories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Add a book</button>
      </form>
    </div>
  );
};
BookForm.propTypes = {
  bookcreate: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  bookcreate: (book) => { dispatch(CreateBook(book)); },
});
export default connect(null, mapDispatchToProps)(BookForm);
