import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{

    constructor(){
        super();
        this.state = { 
          sleepData: [], 
          id: '', 
        deletedSleep: '', 
        isEditing: false, 
        sleepToEdit:{

        } }
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
        this.setState( { id: event.target.name})
        console.log(this.state)
    }

    submitEditHandler = (id, updatedInfo, event) => {
      event.preventDefault();
      axiosWithAuth()
      .put(`/users/${id}, ${updatedInfo}`)
      .then(res => {
        console.log(res);
      })
    }

    //  editChanger = (sleep) => {
    //     this.setState({})
    //  }


    render(){
        return(
            <div className="sleepList">
              <NavBar/>
                <h2 className='sleephead' style={{textAlign:'center', fontSize:'3.5rem', color:'#CFCCCC'}}>Sleep Sessions</h2>
                <div className="ListOfSleep" style={{width:'330px', height:'500px', overflow: 'scroll', display:'flex', flexDirection:'column', marginLeft:'35%', border:'2px solid grey', padding:'2% 2%'}}>
                <Link to='/sleep-form'>Add Session</Link>
                    {this.state.sleepData.map(sleep => (
                        <div className='card' key={sleep.id}>
                          
                            <h4>{`${sleep.sleep_start}`}</h4>
                            <h4>{`${sleep.sleep_end}`}</h4>
                            
                            <span onClick={(event)=> this.submitHandler(event, sleep.id)}>🗑</span>
                            {this.state.isEditing &&
                 <form>
                    <input className='start' onChange={this.changeHandler} placeholder="Start" name="sleep_start" /> <br/>
                    <input className='end' onChange={this.changeHandler} placeholder="End"  name="sleep_end" /> <br/>
                    <input className='first-score' onChange={this.changeHandler} placeholder="Start-Score" type='number' name="start_score" /> <br/> 
                  
                    <input className='end-score' onChange={this.changeHandler} placeholder="End-Score" type='number' name="end_score" /> <br/>
                    <input className='over-score' onChange={this.changeHandler} placeholder='score' type='number' name='overall_score'/> <br/>
                    <button onClick={(event)=> this.submitEditHandler(event, sleep.id, sleep.updatedInfo)}>Finish</button>
                </form>
                      } 
                            <span onClick={() => this.setState({isEditing:!this.state.isEditing})}>📝</span>
                            {console.log(this.state.isEditing)}
                            </div>
                 
                       
                       
                    ))
                    }


                    
                     {/* <Link to='/sleep-form'>Add Session</Link> */}
                </div>

                   <p style={{textAlign:'center', color:'#CFCCCC', marginTop:'3%'}}>Ⓒ 2020 SLEEP APP BUILD WEEK</p>
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


  //  {/* <select onChange={this.changeHandler} name='start_score' placeholder='🤔'>
  //                   <option value='0'>🤔</option>  
  //                   <option value='1'>😞</option>
  //                   <option value='2'>😐</option>
  //                   <option value='3'>😀</option>
  //                   <option value='4'>😁</option>
  //                   </select> <br/>
  //                   <select onChange={this.changeHandler} name='end_score' placeholder='🤔'>
  //                   <option value='0'>🤔</option>  
  //                   <option value='1'>😞</option>
  //                   <option value='2'>😐</option>
  //                   <option value='3'>😀</option>
  //                   <option value='4'>😁</option>
  //                   </select> <br/>
  //                   <select onChange={this.changeHandler} name='overall_score' placeholder='🤔'>
  //                   <option value='0'>🤔</option>     
  //                   <option value='1'>😞</option>
  //                   <option value='2'>😐</option>
  //                   <option value='3'>😀</option>
  //                   <option value='4'>😁</option>
  //                   </select> <br/>