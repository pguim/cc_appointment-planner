import React from "react";

export const ContactPicker = ({ name, value, contacts, handleOnChange }) => {
  return (
    <>
      <label htmlFor="contact">Contact:</label>
      <select name={name} id="contact" onChange={({ target }) => handleOnChange(target.value)} value={value}>
        <option value="">No Contact Selected</option>
        {contacts.map(contact => {
          return <option value={contact.name}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
