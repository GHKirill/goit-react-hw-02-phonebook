import { nanoid } from 'nanoid';
import React, { Component } from 'react';

import css from './ContactForm.module.css';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget;
    this.setState({ name: name.value, number: number.value });
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset() {
    this.setState({ name: '', number: '' });
  }
  styledButtonAfterClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
  };
  render() {
    const idName = nanoid();
    const idPhone = nanoid();

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={idName} className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          id={idName}
          onChange={this.handleInputChange}
        />
        <label htmlFor={idPhone} className={css.formLabel}>
          Phone
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          id={idPhone}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className={css.button}
          onClick={this.styledButtonAfterClick}
        >
          Add Contact
        </button>
      </form>
    );
  }
}
// ==========
