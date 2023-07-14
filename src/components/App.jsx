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

  // checkContactList=()=>{
  //   const { name } = this.state;
  //    this.setState({
  //       contacts: [name],
  //     });
  // }

  addStateContact = () => {};

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

    console.log(contacts === true);
    return;
  };

  // if (check === [])
  //   this.state(prev => {
  //     console.log(name);
  //     return {
  //       contacts: [...prev, ...name],
  //     };
  //   });
  // };
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
