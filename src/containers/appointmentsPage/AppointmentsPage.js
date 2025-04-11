import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ submit, appointments, contacts }) => {
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    submit(title, contact, date, time)
    setTitle('')
    setContact({})
    setDate('')
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} setTitle={setTitle} contacts={contacts} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};