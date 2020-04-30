import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NavBar from './NavBar';

class HomePage extends React.Component{

    constructor(){
        super();
        this.state = { sleepData: [], id: '', deletedSleep: ''}
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

    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth().delete(`/users/${this.state.id}`)
        .then(res => {
            console.log(res)
            alert(`Deleted sleep session ${this.state.id}`);
        })
        .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        this.setState( { id: event.target.value})
        console.log(this.state.id)
    }

    render(){
        return(
            <div className="sleepList">
              <NavBar/>
                <h2 className='sleephead'>Sleep Sessions</h2>
                <div className="ListOfSleep">
                    {this.state.sleepData.map(sleep => 
                        <div className='card' key={sleep.id}>
                            <h4>{`ID: ${sleep.id}`}</h4>
                            <h4>{`${sleep.sleep_start}`}</h4>
                            <h4>{`${sleep.sleep_end}`}</h4>
                            
                            <div className="DeleteFriend">
                <p>Delete</p>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Enter an id"/>
                    <button>X</button>
                </form>
            </div>
                          
                        </div>)
                    }
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
//             </li>
//           ))
//         : null}
//         </ul>

//         <button className='nd-button' onClick={() => push('/sleep-form')}>Add Session</button>
        
      
//     </div>
//   );
// };

// export default HomePage;

