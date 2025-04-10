import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  nameError
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={({ target }) => setName(target.value)} required />
      <p style={{ color: 'red', fontSize: '12px', marginTop: '0px', marginBottom: '20px' }}>{nameError}</p>
      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} pattern="[0-9]{9}" required />
      <label htmlFor="email">Email:</label>
      <input id="email" type="text" value={email} onChange={({ target }) => setEmail(target.value)} pattern="(([a-z\d.]+)[@]([a-z\d]+)[.]([a-z]+))" required />
      <input type="submit" />
    </form>
  );
};

