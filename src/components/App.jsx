import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitContactForm = ({ name, number }) => {
    if (this.checkContactAsCurrent(name)) {
      alert(`${name} is already is in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };
  checkContactAsCurrent = newName => {
    return this.state.contacts.some(({ name }) => name === newName);
  };
  handleFilter = value => {
    console.log(value);
    // const { value } = event.currentTarget;
    this.setState({ filter: value.filter });
    console.log(this.state);
  };
  handleFilteredContacts = () => {
    // this.setState({ filter: value });
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };
  onButtonDeleteClick = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={values => this.submitContactForm(values)} />
        <h2>Contacts</h2>
        {/* <Filter handleFilter={this.handleFilter} /> */}
        <Filter onChange={value => this.handleFilter(value)} />
        <ContactList
          contacts={this.handleFilteredContacts()}
          // contacts={value => this.handleFilteredContacts(value)}
          onButtonDeleteClick={this.onButtonDeleteClick}
        />
      </div>
    );
  }
}
