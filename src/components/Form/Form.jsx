import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = () => {};
  handleTest = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.addContact(this.state);
    evt.target[0].value = '';
    evt.target[1].value = '';
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleTest}
          // value={input.tagtet.value}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={this.handleTest}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
