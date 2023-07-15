import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ props, visible, deleteContact }) => {
  console.log(props);
  console.log(visible);
  if (!visible) {
    visible = [];
  }
  return props.map(({ name, id }) => {
    const getId = () => {
      deleteContact(id);
      return id;
    };
    return (
      <div key={id}>
        <h2>{name}</h2>
        <button type="button" onClick={() => getId(id)}>
          Delete
        </button>
      </div>
    );
  });
};

Contact.propTypes = {};

export default Contact;
