import { Component } from 'react';
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
    const { contacts, name } = this.state;
    const check = contacts.filter(el => el.name === name);
    if (check === [])
      this.state(prev => {
        console.log(name);
        return {
          contacts: [...prev, ...name],
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
        <Form handleChange={this.handleChange} addContact={this.addContact} />
      </div>
    );
  }
}
export default App;
