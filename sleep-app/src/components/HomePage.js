import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// components
import NavBar from "./NavBar";

const HomePage = () => {

  useEffect(() => {
    axiosWithAuth()
    .get('https://sleep-tracker2020.herokuapp.com/api/users')
    .then(res => {
      console.log(res);
    })

    .catch(err => {
      console.log(err, 'you have an error');
    })
  }, [])




  return (
    <div>
      <NavBar/>
        <h1>Welcome to main page</h1>
        
      
    </div>
  );
};

export default HomePage;

