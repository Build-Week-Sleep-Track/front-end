import React from 'react';

function Registration(props){
    let {
        values,
        handleChanges,
        onSubmit,
        disabled,
        errors,
    } = props;

    console.log('props in reg', props)
    return (
        <>
        <h1>inside Registration</h1>
        
        <form>
            <label htmlFor='first_name'>First Name</label>
            <input id='first_name' type='text' name='first_name' value={values.first_name} onChange={handleChanges}/>

            <label htmlFor='last_name'>Last Name</label>
            <input id='last_name' type='text' name='last_name' value={values.last_name} onChange={handleChanges}/>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' value={values.email} onChange={handleChanges}/>

            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' value={values.password} onChange={handleChanges}/>

            <label htmlFor='confirm_password'>Confirm Password</label>
            <input id='confirm_password' type='password' name='confirm_password' value={values.confirm_password} onChange={handleChanges}/>

            <button onClick={onSubmit} disabled={disabled}>Sign Up</button>

            <div className='errors'>
                {errors.first_name}
                {errors.last_name}
                {errors.email}
                {errors.password}
                {errors.confirm_password}
            </div>
        </form>
        </>
    )
}

export default Registration;