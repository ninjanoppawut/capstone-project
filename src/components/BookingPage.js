import React, { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from './API';
import ConfirmedBooking from './ConfirmedBooking';

export function BookingForm({ availableTimes, handleFormSubmit, handleDateChange }) {
  const [formData, setFormData] = useState({
    time: availableTimes[0],
    guest: 1,
    occasion: 'Birthday'
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
    console.log('Form Submitted')
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
            handleDateChange(e.target.value);
          }}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={formData.guest}
          onChange={(e) => setFormData({ ...formData, guest: e.target.value })}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={formData.occasion}
          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

function BookingPage() {
  const [date, setDate] = useState('');
  const [availableTimes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INIT':
        return fetchAPI(new Date()); // initialize with today's date
      case 'UPDATE_TIMES':
        return fetchAPI(new Date(date)); // fetch available times for selected date
      default:
        return state;
    }
  }, []);

  function handleFormSubmit(formData) {
    console.log(formData);
    const success = submitAPI(formData);
    if (success) {
      alert('Booking successful!');
    } else {
      alert('Booking failed.');
    }
  }

  function handleDateChange(date) {
    setDate(date);
    dispatch({ type: 'UPDATE_TIMES' });
  }

  return (
    <div>
      <h1>This is Main</h1>
      <BookingForm
        availableTimes={availableTimes}
        handleFormSubmit={handleFormSubmit}
        handleDateChange={handleDateChange}
      />
    </div>
  );
}

export default BookingPage;