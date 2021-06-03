/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography',
    'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <label>
        <select onChange={changeFilter}>
          {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
    </div>

  );
};
CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
export default CategoryFilter;
