import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => {
  const handleFilterChange = data => {
    handleFilter(data.target.value);
  };
  return (
    <input
      onChange={handleFilterChange}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
  );
};

// Filter.propTypes = {};

export default Filter;
