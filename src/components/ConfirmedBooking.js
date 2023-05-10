import React, { useState } from 'react';
import {submitAPI} from './API'

import { BookingForm } from './BookingPage';


function ConfirmedBooking() {

    const [ isLoading, setIsLoading ] = useState(false);

    const submitForm = async(formData) => {
        try {
            setIsLoading(true);
            const response = submitAPI(formData);
            if(response === true) {
                window.location.href = '/booking-confirmed';
            } else {
                console.error('Submit failed:', response)
            }
        } catch (error) {
            console.error('Submit error:', error);
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <BookingForm onSubmit={submitForm} isLoading={isLoading}/>
      <p>Your booking has been confirmed. Thank you for choosing our service.</p>
    </div>
  );
}

export default ConfirmedBooking;