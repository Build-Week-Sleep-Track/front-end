import React, { useState, useEffect } from "react";

function HomeCard(props){
    console.log('from props', props)
    let { sessions } = props
    console.log('props deconstructed', sessions)

    return (
        <div className='parentDiv'>
            <h1>Recent Sleep</h1>
            {
            sessions.map(session => {
                // let status = 'bad'
                // if (session.overall_score === 3){
                //      status = "good"
                // }else if(session.overall_score === 2){
                //     status = 'fair'
                // }else if(session.overall_score === 4){
                //     status ='Awesome'
                // }

                return (
                    <div className='sleepCardParent' key={session.id} style={{display: 'flex', flexDirection: 'column'}}>
                        {/* <span>{status}</span> */}
                        <span>Night: {new Date(session.sleep_start).toString().split(' ').slice(0, 4).join(' ')}</span>
                        <span>Day: {new Date(session.sleep_end).toString().split(' ').slice(0, 4).join(' ')}</span>
                        <span>Your mood this session: {session.overall_score === 1 ? 'bad' : session.overall_score === 2 ? 'fair' : session.overall_score === 3 ? 'good' : 'awesome'}</span>
                    </div>
                )
            })
        }
        </div>

    );
}

export default HomeCard;





        // {
        //     sessions.map(session => {
        //         return (
        //         <div key={session.id} style={{display: 'flex', flexDirection: 'column'}}>
        //             <div>
        //             </div>
        //             <span>Night: {new Date(session.sleep_start).toString().split(' ').slice(0, 4).join(' ')}</span>
        //             <span>Day: {new Date(session.sleep_end).toString().split(' ').slice(0, 4).join(' ')}</span>
        //             <span>Your mood this session: {session.overall_score}</span>
        //         </div>
        //         )
        //     })
        // }