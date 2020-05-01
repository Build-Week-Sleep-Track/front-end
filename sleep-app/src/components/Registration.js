import React from 'react';
import { Button, TextField, Container } from '@material-ui/core'
import styled from 'styled-components';
import { makeStyles, withTheme } from '@material-ui/core/styles';
console.log('asdf', TextField)
let useStyles = makeStyles({
    buttonStyles: {
        backgroundColor: '#3A869D',
        '&:hover': {
            backgroundColor: 'red'
        },
    },
    mainContainer: {
        backgroundColor: '#131313',
        display: 'flex',
        justifyContent: 'space-around',
        height: '100vh',
        alignItems: 'center'
    },
    fieldStyles: {
        backgroundColor: '#4f4f4f',
        color: 'red',
        width: '100%',
    },
    input: {
        color: 'white'
    },
    inputLabel: {
        color: '#9d9d9d',
        '&:hover': {
            color: 'white'
        },
    }
})

let StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 45%;
`

function Registration(props){
    let {
        values,
        handleChanges,
        onSubmit,
        disabled,
        errors,
    } = props;

    let classes = useStyles();

    console.log('props in reg', props)
    return (
        <>
        <Container className={classes.mainContainer}>
        <h1 style={{color: 'white'}}>Let's get started!</h1>
        <h3 style={{color: '#c4c4c4'}}>Let Sleep Tracker help you discover <span style={{display: 'block'}}></span>your ideal sleep schedule></h3>
        <StyledForm noValidate autoComplete="off">
            <TextField 
            className={classes.fieldStyles}
            InputProps={{className: classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            variant='filled'
            id="first_name" 
            type='text' 
            name='first_name' 
            label="First Name"
            value={values.first_name} 
            onChange={handleChanges}/>

            <TextField 
            className={classes.fieldStyles}
            InputProps={{className: classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            variant='filled'
            id="last_name" 
            type='text' 
            name='last_name' 
            label="Last Name" 
            value={values.last_name} 
            onChange={handleChanges}/>

            <TextField
            className={classes.fieldStyles}
            InputProps={{className: classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            variant='filled' 
            id="email-basic" 
            type='email' 
            name='email' 
            label="Email"
            value={values.email} 
            onChange={handleChanges}/>

            <TextField 
            className={classes.fieldStyles}
            InputProps={{className: classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            variant='filled'
            id="password"
            type='password' 
            name='password' 
            label="Password" 
            value={values.password} 
            onChange={handleChanges}/>

            <TextField 
            className={classes.fieldStyles}
            InputProps={{className: classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            variant='filled'
            id="confirm_password" 
            type='password' 
            name='confirm_password' 
            label="Confirm Password" 
            value={values.confirm_password}
             onChange={handleChanges}/>

            <Button 
            className={classes.buttonStyles} 
            onClick={onSubmit} 
            color='secondary' 
            variant='outlined'
            disabled={disabled}
            >Sign Up</Button>

            <div className='errors' style={{color: '#c4c4c4'}}>
                {errors.first_name}
                {errors.last_name}
                {errors.email}
                {errors.password}
                {errors.confirm_password}
            </div>
        </StyledForm>

        </Container>
        </>
    )
}

export default Registration;



/*
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
*/