import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App () {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const getContactByName = (contactName) => {
    return contacts.filter(contact => { return contact.name === contactName })
  }

  const validateContact = (contact) => {

    if (typeof contact !== 'object') throw new Error('\'contact\' should be an object')
    const contactKeys = Object.keys(contact)
    if (contactKeys.length !== 3) throw new Error('\'contact\' object length is invalid')
    if (contactKeys[0] !== 'name' || contactKeys[1] !== 'phone' || contactKeys[2] !== 'email') throw new Error('\'contact\' structure is invalid')

    if (typeof contact.name !== 'string') throw new Error('\'name\' should be a string')
    if (typeof contact.phone !== 'string') throw new Error('\'phone\' should be a string')
    if (typeof contact.email !== 'string') throw new Error('\'email\' should be a string')

    if (contact.name.length < 3) throw new Error('\'name\' should be at least three characters long')

    const phoneRegex = new RegExp(/[0-9]{9}/)
    if (!phoneRegex.test(contact.phone)) throw new Error('\'phone\' should be composed by 9 numbers')

    const emailRegex = new RegExp(/(([a-z\d.]+)[@]([a-z\d]+)[.]([a-z]+))/)
    if (!emailRegex.test(contact.email)) throw new Error('\'phone\' should be composed by 9 numbers')

  }

  const addContact = (contact) => {

    try {
      validateContact(contact)
    } catch (e) {
      throw e
    }

    // Check wether contact doesn't already exists (full coincidence)
    if (contacts.includes(contact)) throw new Error('Contact already exists')

    // Create new contact
    setContacts(prev => [...prev, contact])

  }

  const addAppointment = (title, contactName, date, time) => {

    // Check input data types
    if (typeof title !== 'string') throw new Error('\'title\' should be a string')
    if (typeof contactName !== 'string') throw new Error('\'contactName\' should be a string')
    if (typeof date !== 'string') throw new Error('\'date\' should be a string')
    if (typeof time !== 'string') throw new Error('\'time\' should be a string')

    // Check input formats
    if (title.length < 3) throw new Error('\'title\' should be at least three characters long')
    if (contactName.length < 3) throw new Error('\'contactName\' should be at least three characters long')

    const appointment = { title, contactName, date, time }

    // Create new contact
    setAppointments(prev => [...prev, appointment])

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage items={contacts} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} submit={addAppointment} />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
