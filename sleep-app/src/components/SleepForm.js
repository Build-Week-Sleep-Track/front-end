import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NavBar from './NavBar';

class SleepForm extends React.Component{

    constructor(){
        super();
        this.state = { sleep: {sleep_start: '', start_score:[0], sleep_end:'', end_score:[0], overall_score:0} }
    }
    
  
    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/users", this.state.sleep.sessions)
        .then(res => {
            console.log(res)
        })
        // .catch(err => console.log(err))
    }

    changeHandler = (event) => {
        this.setState( {sleep: {...this.state.sleep, [event.target.name]: event.target.value}})
        // console.log(this.state)
    }

    render(){
        return(
            <div className="AddSleep">
                <NavBar/>
                <h2 className='addsleep'>Add Sleep</h2>
                <form onSubmit={this.submitHandler}>
                    <input className='start' onChange={this.changeHandler} placeholder="Start" name="sleep_start" /> <br/>
                    <input className='first-score' onChange={this.changeHandler} placeholder="Start-Score" type='number' name="start_score" /> <br/>
                    <input className='end' onChange={this.changeHandler} placeholder="End"  name="sleep_end" /> <br/>
                    <input className='end-score' onChange={this.changeHandler} placeholder="End-Score" type='number' name="end_score" /> <br/>
                    <input className='over-score' onChange={this.changeHandler} placeholder='score' type='number' name='overall_score'/> <br/>
                    <button className='add'>Add Session</button>
                </form>
                
                {console.log('line 11', this.state)}
                
            </div>
        )
    }

}


export default SleepForm;







