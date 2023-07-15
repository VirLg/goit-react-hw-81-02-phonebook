import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ props, visible }) => {
  console.log(visible);
  return (
    visible ||
    props.map(({ name }) => {
      return (
        <div key={name}>
          <h2>{name}</h2>
        </div>
      );
    })
  );
};

Contact.propTypes = {};

export default Contact;
