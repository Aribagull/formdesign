import React, { useState } from 'react';
import { PhoneInput as ReactPhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneInput = ({ phone, onChange }) => {
  return (
    <div className='forminput'>
      <label>Phone Number:</label>
      
      <ReactPhoneInput
        defaultCountry="pa"
        value={phone}
        onChange={onChange}
        inputStyle={{
          width: '100%',
          height: '50px', 
          border: '1px solid var(--react-international-phone-border-color, gray',
          borderLeft: 'none',

          
        }}
        
        
      />
      
    </div>
  );
};

export default PhoneInput;
