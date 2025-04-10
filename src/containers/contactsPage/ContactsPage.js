import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!contactExists(name)) {
      props.addContact({ name, phone, email })
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (name.length < 3) {
      setNameError('Name length should have at least 3 characters.')
      return
    }
    if (name.length > 32) {
      setNameError('Name length should have as maximum 32 characters.')
      return
    }
    const nameRegex = new RegExp(/[a-zA-Z]/)
    if (!nameRegex.test(name)) {
      setNameError('Invalid characters in name. Use only non special characters.')
      return
    }
    if (contactExists(name)) {
      setNameError('Contact already exists')
      return
    }
    setNameError('')
  }, [name])

  const contactExists = (name) => {
    let exists = false
    props.contacts.forEach(contact => {
      if (contact.name === name) {
        exists = true
      }
    })
    return exists
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} nameError={nameError} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
