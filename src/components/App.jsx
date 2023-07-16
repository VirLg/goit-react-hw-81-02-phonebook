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
      const check = contacts.find(el => el.name === name);
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
  filterContact = e => {
    this.setState({
      filter: e.target.value,
    });
    this.filterArrContact();
  };

  // filterArrContact = () => {
  //   const { contacts, filter } = this.state;
  //   this.setState({
  //     contacts: contacts.filter(el => el.name.includes(filter)),
  //   });
  // };

  deleteContact = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(el => el.id !== id),
      };
    });
  };

  render() {
    const visible = this.state.contacts.filter(el =>
      el.name.includes(this.state.filter)
    );

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
          props={visible}
          // visible={this.state.filter}
          deleteContact={this.deleteContact}
        />
        <Form addContact={this.addContact} />

        <Filter
          filterContact={this.filterContact}
          stateFilter={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
