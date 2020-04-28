import React, { useState, useEffect } from 'react';
import axios from 'axios'; //fernando
import * as yup from 'yup'; //fernando

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from './components/MainPage';
import Registration from './components/Registraton';


let initialRegistrationValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
}

//empty string, to hold validation errors
let initialErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
}

let formSchema = yup.object().shape({
  first_name: yup.string().min(2, 'Must be at least 2 characters long').required('Please fill in your first name'),
  last_name: yup.string().min(2, 'Must be at least 2 characters long').required('Please fill in your last name'),
  email: yup.string().email('enter valid email').required('email is required'),
  password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/, 'Needs to be at least 5 characters long, Must have a capital and lowercase character, and include a number and symbol)'),
  confirm_password: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
})

function App() {
    //holding and updating values from form
    let [registrationValues, setRegistrationValues] = useState(initialRegistrationValues)
    //track whether form is submitable or not
    let [formDisabled, setFormDisabled] = useState(true)
    //track if validations
    let [formErrors, setFormErrors] = useState(initialErrors)
  
    useEffect(() => {
      formSchema.isValid(registrationValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
    }, [registrationValues])
  
    let handleChanges = e =>{
      let name = e.target.name,
          value = e.target.value
  
          yup.reach(formSchema, name)
          .validate(value).then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: '',
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            })
          })
      
        setRegistrationValues({
        ...registrationValues,
        [name]: value
      })
    }
  
    let onSubmit = e => {
      e.preventDefault()
      axios.post('https://sleep-tracker2020.herokuapp.com/api/auth/register', registrationValues )
        .then(res => {
          console.log(res)
        })
        setRegistrationValues(initialRegistrationValues)
    }

  return (
   <div className="App">
       <Router>
          {/* <h1> 
          Hello world
          </h1> */}
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/main-page" component={MainPage} />
            <Route path='/registration'>
            <Registration
            values={registrationValues}
            handleChanges={handleChanges}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors}
            />
            </Route>
        </Router>
    </div>
  );
}

export default App;
