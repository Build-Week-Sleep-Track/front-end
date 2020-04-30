import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import HomeCard from './HomeCard';

// components
import NavBar from "./NavBar";


const HomePage = () => {
  let [sleepList, setSleepList] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('https://sleep-tracker2020.herokuapp.com/api/users')
    .then(res => {
      console.log(res);
      setSleepList(res.data.sessions)
      
    })

    .catch(err => {
      console.log(err, 'you have an error');
    })
  }, [])

  return (
    <div>
      <NavBar/>
        <h1>Welcome to main page</h1>
        <HomeCard
        sessions={sleepList}
        />
      
    </div>
  );
};

export default HomePage;

