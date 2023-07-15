import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ props, visible }) => {
  // console.log(props);

  let render = props;
  if (visible) {
    render = visible;
  } else {
    render = props;
  }
  const deleteContact = id => {
    render = render.filter(el => el.id !== id);
    console.log(render);
  };
  console.log(render);
  return render.map(({ name, id }) => {
    return (
      <div key={id}>
        <h2>{name}</h2>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    );
  });
};

Contact.propTypes = {};

export default Contact;
