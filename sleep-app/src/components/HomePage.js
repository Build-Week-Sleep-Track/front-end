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






///////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from 'axios';

// // components
// import NavBar from "./NavBar";
// let url = 'https://sleep-tracker2020.herokuapp.com/api/users/';

// const HomePage = () => {
  // let [sessions, setSessions] = useState([])

//   useEffect(() => {
//     axiosWithAuth()
//     .get(url)
//     .then(res => {
//       console.log(res)
//       setSessions(res.data.sessions)
//     })
//     .catch(err => {
//       console.log('no data found', err)
//     })
//   }, [])
// console.log(sessions)
//   return (
//     <div>
//         <h1>Welcome to main page</h1>
//         <h2>Hellllllooooo</h2>
        // {
        //   sessions.map(session => {
        //     return (
        //       <div key={session.id} style={{display: 'flex', flexDirection: 'column'}}>
        //         <div>
        //         </div>
        //         <span>Night: {new Date(session.sleep_start).toString().split(' ').slice(0, 4).join(' ')}</span>
        //         <span>Day: {new Date(session.sleep_end).toString().split(' ').slice(0, 4).join(' ')}</span>
        //       </div>
        //     )
        //   })
        // }
        
      
//     </div>
//   );
// };

// export default HomePage;