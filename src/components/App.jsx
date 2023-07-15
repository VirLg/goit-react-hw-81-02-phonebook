import { Component } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    // number: '',
    filter: '',
  };
  handleChange = data => {
    this.setState({
      name: data,
    });
  };

  addContact = () => {
    const { name, contacts } = this.state;

    if (contacts) {
      const check = contacts.find(el => el.name === name.name);
      if (check) {
        return alert('NoNoNo');
      }
      this.setState(prev => {
        return {
          contacts: [
            {
              name: name.name,
              id: nanoid(),
            },
            ...prev.contacts,
          ],
        };
      });
    }
  };
  filterContact = data => {
    console.log(data);
    const { contacts } = this.state;
    if (data && contacts !== []) {
      const visible = contacts.filter(({ name }) => name.includes(data));
      this.setState({
        filter: visible,
      });
    }
    console.log(this.state.contacts);
  };
  deleteContact = id => {
    const { contacts } = this.state;
    const del = contacts.filter(el => el.id !== id);
    console.log(id);

    this.setState({
      contacts: del,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Contact
          props={this.state.contacts}
          visible={this.state.filter}
          deleteContact={this.deleteContact}
        />
        <Form handleChange={this.handleChange} addContact={this.addContact} />

        <Filter handleFilter={this.filterContact} />
      </div>
    );
  }
}
export default App;
