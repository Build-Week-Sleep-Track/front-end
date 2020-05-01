import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container } from '@material-ui/core'

let useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 9.5%',
        width: '100%',
        height: '8vh',
        backgroundColor: '#272727',
    },
})

let StyledSpan = styled.span`
display: block;
width: 100%;
height: 3vh;
background-color: #383838;
`;

let NavContainer = styled.div`
display: flex;
width: 50%;
justify-content: space-between;
font-size: 25px;
`;

let StyledLink = styled(Link)`
color: #c4c4c4;
text-decoration: none;
`;

const RegistrationNav = () => {
    let classes = useStyles();
    
    return (
        <body>
            <StyledSpan></StyledSpan>
                <Container className={classes.mainContainer}>
                    <h1 style={{
                        fontSize: '50px', 
                        margin: '0', 
                        color: 'white', 
                        width: '50%'
                        }}>Sleep Tracker</h1>
                    <NavContainer className='regNav'>
                        <a href='https://build-week-sleep-track.github.io/marketing-page/index.html' style={{
                            textDecoration: 'none', color: '#c4c4c4'
                        }}
                        >Home</a>
                        <a href='https://build-week-sleep-track.github.io/marketing-page/index.html' style={{
                            textDecoration: 'none', color: '#c4c4c4'
                        }}
                        >About</a>

                        <StyledLink to='/' 
                        >login</StyledLink>
                    </NavContainer>
                </Container>           
        </body>
    );
};

export default RegistrationNav;