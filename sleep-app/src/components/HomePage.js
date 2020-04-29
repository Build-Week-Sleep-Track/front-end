import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route, NavLink, useHistory } from 'react-router-dom';

// components
import NavBar from "./NavBar";

const HomePage = () => {
const {push} = useHistory();
const [sleepList, setSleepList] = useState([]);

  useEffect(() => {
   
    axiosWithAuth()
    .get('/users')
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
        <ul>
          {sleepList ? sleepList.map(sleep => (
            <li key={sleep.id}>
            Start- {sleep.sleep_start}
            End- {sleep.sleep_end}
            </li>
          ))
        : null}
        </ul>

        <button className='nd-button' onClick={() => push('/sleep-form')}>Add Session</button>
        
      
    </div>
  );
};

export default HomePage;

