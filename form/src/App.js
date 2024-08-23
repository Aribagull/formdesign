import { useState } from "react";
import "./App.css";
import FormInput from "./components/Formsinput";
import PhoneInput from "./components/PhoneInput"; 

const App = () => {          
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMassage:
        "Username should be 3-16 characters and shouldn't include any special characters",
      label: "Username:",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMassage: "It should be a valid Email Address!",
      label: "Email:",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday:",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMassage:
      "Password should be 8-20 characters and include at least 1 special character",
      label: "Password:",
      pattern: "^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMassage: "Passwords don't match!",
      label: "Confirm Password:",
      pattern: values.password,
      required: true,
    },
    {
      id: 6,
      name: "phone",
      type: "tel", 
      placeholder: "Phone Number",
      label: "Phone Number:",
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  

  return (
    <div className="App">
      <div className="form-design">
        <h1>Registration Form</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              input.name === "phone" ? (
                <PhoneInput key={input.id} phone={values.phone} onChange={(phone) => setValues({ ...values, phone })} />
              ) : (
                <FormInput key={input.id} {...input} onChange={onChange} value={values[input.name]} />
              )
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
