/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BookForm = () => {
  const bookCataegories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <label>
          Book title
          <input type="text" />
        </label>
        <label>
          Select the Category
          <select>
            {bookCataegories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add a book</button>
      </form>
    </div>
  );
};
export default BookForm;
