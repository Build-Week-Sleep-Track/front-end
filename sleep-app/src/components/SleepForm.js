import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

const SleepForm = () => {
   const {push} = useHistory();
   const [sleep, setSleep] = useState({
    id: Math.random(),   
    sleep_start: '', 
    start_score:[0], 
    sleep_end:'', 
    end_score:[0], 
    overall_score:0   
   }) 
    
    
  
   const submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/users", sleep)
        .then(res => {
            console.log(res)
            
        })
        // .catch(err => console.log(err))
    }

   const changeHandler = (event) => {
        setSleep({...sleep, [event.target.name]: event.target.value})
        // console.log(this.state)
    }

    
    
        return(
            <div className="AddSleep">
                <NavBar/>
                <h2 className='addsleep'>Add Sleep</h2>
                <form onSubmit={submitHandler}>
                    <input className='start' onChange={changeHandler} placeholder="Start" name="sleep_start" /> <br/>
                    <input className='end' onChange={changeHandler} placeholder="End"  name="sleep_end" /> <br/>
                    <input className='first-score' onChange={changeHandler} placeholder="Start-Score" type='number' name="start_score" /> <br/>

                    <input className='end-score' onChange={changeHandler} placeholder="End-Score" type='number' name="end_score" /> <br/>
                    <input className='over-score' onChange={changeHandler} placeholder='score' type='number' name='overall_score'/> <br/>
                
                    <button className='add' type='submit' onClick={() => push('/home-page')} >Add Session</button> */}
                </form>
                
                {/* {console.log('line 11', this.state)} */}
                
            </div>
        )
    

}



export default SleepForm;







//   /* <select onChange={changeHandler} name='end_score' placeholder='🤔'>
//                     <option value='0'>🤔</option>  
//                     <option value='1'>😞</option>
//                     <option value='2'>😐</option>
//                     <option value='3'>😀</option>
//                     <option value='4'>😁</option>
//                     </select> <br/>
//                     <select onChange={changeHandler} name='overall_score' placeholder='🤔'>
//                     <option value='0'>🤔</option>     
//                     <option value='1'>😞</option>
//                     <option value='2'>😐</option>
//                     <option value='3'>😀</option>
//                     <option value='4'>😁</option>
//                     </select> <br/>