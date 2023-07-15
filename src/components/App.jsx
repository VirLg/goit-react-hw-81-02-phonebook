import { Component } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = props => {
    const { name, number } = props;

    const { contacts } = this.state;

    if (contacts) {
      const check = contacts.find(el => el.name === name.name);
      if (check) {
        return alert('NoNoNo');
      }
      this.setState(prev => {
        return {
          contacts: [
            {
              name,
              number,
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
    this.setState(prev => {
      return {
        filter: prev.contacts.filter(el => el.name.includes(data)),
      };
    });
  };
  deleteContact = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(el => el.id !== id),
      };
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
        <Form addContact={this.addContact} />

        <Filter handleFilter={this.filterContact} />
      </div>
    );
  }
}
export default App;
