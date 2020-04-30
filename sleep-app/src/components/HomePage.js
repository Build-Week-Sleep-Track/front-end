import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{

    constructor(){
        super();
        this.state = { sleepData: [], id: '', deletedSleep: '', isEditing: false }
    }

    componentDidMount() {
        this.getSleepList();
    }

    getSleepList = () => {
         axiosWithAuth().get("/users")
        .then(res => {
            console.log("Successfully got friends",res);
            this.setState({ sleepData: res.data.sessions});
           
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    submitHandler = (event, id) => {
      
        event.preventDefault();
        axiosWithAuth().delete(`/users/${id}`)
        .then(res => {
            console.log(res)
            alert(`Deleted sleep session ${id}`);
        })
        .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }

    submitEditHandler = (id, updatedInfo, event) => {
      event.preventDefault();
      axiosWithAuth()
      .put(`/users/${id}, ${updatedInfo}`)
      .then(res => {
        console.log(res);
      })
    }


    render(){
        return(
            <div className="sleepList">
              <NavBar/>
                <h2 className='sleephead'>Sleep Sessions</h2>
                <div className="ListOfSleep">
                    {this.state.sleepData.map(sleep => 
                        <div className='card' key={sleep.id}>
                            <h4>{`${sleep.sleep_start}`}</h4>
                            <h4>{`${sleep.sleep_end}`}</h4>
                            <button onClick={(event)=> this.submitHandler(event, sleep.id)}>X</button>
                            {this.state.isEditing &&
                 <form>
                    <input className='start' onChange={this.changeHandler} placeholder="Start" name="sleep_start" /> <br/>
                    <input className='first-score' onChange={this.changeHandler} placeholder="Start-Score" type='number' name="start_score" /> <br/>
                    <input className='end' onChange={this.changeHandler} placeholder="End"  name="sleep_end" /> <br/>
                    <input className='end-score' onChange={this.changeHandler} placeholder="End-Score" type='number' name="end_score" /> <br/>
                    <input className='over-score' onChange={this.changeHandler} placeholder='score' type='number' name='overall_score'/> <br/>
                    <button onClick={(event)=> this.submitEditHandler(event, sleep.id, sleep.updatedInfo)}>Finish</button>
                </form>
                      } 
                            <button onClick={() => this.setState({isEditing:!this.state.isEditing})}>Edit</button>
                            {console.log(this.state.isEditing)}

                            <div className="DeleteFriend">
                
            </div>
                 
                       
                        </div>)
                    }
                     <Link to='/sleep-form'>Add Session</Link>
                </div>
            </div>
        )
    }

}


export default HomePage 

// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Route, NavLink, useHistory } from 'react-router-dom';

// // components
// import NavBar from "./NavBar";

// const HomePage = () => {
// const {push} = useHistory();
// const [sleepList, setSleepList] = useState([]);

//   useEffect(() => {
   
//     axiosWithAuth()
//     .get('/users')
//     .then(res => {
//       console.log(res);
//       setSleepList(res.data.sessions)
//     })

//     .catch(err => {
//       console.log(err, 'you have an error');
//     })
  
  
// }, [])





//   return (
//     <div>
//       <NavBar/>
//         <h1>Welcome to main page</h1>
//         <ul>
//           {sleepList ? sleepList.map(sleep => (
//             <li key={sleep.id}>
//             Start- {sleep.sleep_start}
//             End- {sleep.sleep_end}
//             <button>X</button>
//             </li>
//           ))
//         : null}
//         </ul>

//         <button className='nd-button' onClick={() => push('/sleep-form')}>Add Session</button>
        


      
//     </div>
//   );
// };

// export default HomePage;






///////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from 'axios';
// import { Route, NavLink, useHistory } from 'react-router-dom';

// // components
// import NavBar from "./NavBar";
// // let url = 'https://sleep-tracker2020.herokuapp.com/api/users/';

// const HomePage = () => {
//   const {push} = useHistory();
//   let [sessions, setSessions] = useState([])

//   useEffect(() => {
//     axiosWithAuth()
//     .get('/users')
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
//         {
//           sessions.map(session => {
//             return (
//               <div key={session.id} >
//                 <div>
//                 </div>
//                 <span>Night: {new Date(session.sleep_start).toString().split(' ').slice(0, 4).join(' ')}</span>
//                 <span>Day: {new Date(session.sleep_end).toString().split(' ').slice(0, 4).join(' ')}</span>
               
//               </div>

              
//             )
            
//           })
//         }
//          <button className='nd-button' onClick={() => push('/sleep-form')}>Add Session</button>
        
      
//     </div>
//   );
// };

// export default HomePage;
