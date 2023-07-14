import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ props }) => {
  console.log(props);
  return props.map(({ name }) => {
    return (
      <div key={name}>
        <h2>{name}</h2>
      </div>
    );
  });
};

Contact.propTypes = {};

export default Contact;
