import React, { Component } from "react";
import ContactForm from "./ContactForm/form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  
  handleSubmitForm = ( data ) => {

    const isDuplicate = this.state.contacts.some((contact) => contact.name === data.name) 
    if (isDuplicate) {
      alert(`${data.name} is already in contacts`)
    } else {
      const newContact = {
      id: nanoid(10), ...data
      };
      
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts ]
      }))
    }
  }
  
  handleChangeFilter = ({target}) => {    
    this.setState({ filter: target.value })
  }

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter((contact) => contact.id !== id)
    this.setState({ contacts: filteredContacts })
    
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getSubmit={this.handleSubmitForm} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.handleChangeFilter} value={this.state.filter} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
      </div>      
    )
  }
}

export default App;