//try to name files correctly eg. Formsinput can be named FormInput (words upper case first character and single form input so no 's')
import React, { useState } from 'react';
import "./forminput.css";

const FormInput = (props) => {
  const { label, errorMassage, onChange, id, value, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className='forminput'>
      <label>{label}</label>
      <input
        {...inputProps}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={() => value && setFocused(true)} 
        focused={focused.toString()}
      />
      
      <span>{focused && errorMassage}</span>
    </div>
  );
};

export default FormInput;
