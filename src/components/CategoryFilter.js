/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['All', 'Action', 'Biography',
    'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <label>
        <select className="catFilter" onChange={(e) => { changeFilter(e.target.value); }}>
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
