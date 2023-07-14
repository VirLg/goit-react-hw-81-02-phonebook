import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Form extends Component {
  handleChange = data => {
    this.props.handleChange({
      name: data.target.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.addContact();
    evt.target[0].value = '';
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
