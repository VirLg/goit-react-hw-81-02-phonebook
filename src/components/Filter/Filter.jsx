import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter, filerContact }) => {
  const filterContact = data => {
    const check = data.target.value;

    const renderFilter = handleFilter.filter(el => el.name.includes(check));
    filerContact(renderFilter);
  };

  return (
    <input
      onChange={filterContact}
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
