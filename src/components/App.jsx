import { Component } from 'react';
import Contact from './Contact/Contact';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
          contacts: [name, ...prev.contacts],
        };
      });
    }
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
        <Contact props={this.state.contacts} />
        <Form handleChange={this.handleChange} addContact={this.addContact} />
      </div>
    );
  }
}
export default App;
