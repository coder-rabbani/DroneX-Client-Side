import { Container, Typography, Box, CircularProgress, Alert, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const {user, isLoading, registerUser, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.name, loginData.password, history);
        
    }

    return (
        <>
        <Header></Header>
        <Box sx={{maxWidth:"600px", margin:"0 auto"}}>
        <Container sx={{pt:5, pb:10}}>
            <Typography variant="h4" sx={{textAlign:"center"}}>Please Register</Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:1, m:1}}
                    id="standard-basic" 
                    name="name"
                    onBlur={handleOnBlur}
                    label="Your Name" 
                    variant="standard" 
                    />
                    <TextField 
                    sx={{width:1, m:1}}
                    id="standard-basic" 
                    name="email"
                    onBlur={handleOnBlur}
                    type="email"
                    label="Your Email" 
                    variant="standard" 
                    />
                    <TextField 
                    sx={{width:1, m:1}}
                    id="standard-basic" 
                    label="Your Password" 
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    type="password"
                    />
                    <TextField 
                    sx={{width:1, m:1}}
                    id="standard-basic" 
                    label="Re-type Password" 
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard" 
                    type="password"
                    />
                    <Button className="my-btn" sx={{width:1, m:1}} variant="contained" type="submit">Register</Button>
                    <NavLink style={{textDecoration:'none'}} to="/login">
                        <Button variant="text">Already Registered? Please Login here</Button>
                    </NavLink>    
                </form>}
            {isLoading && <CircularProgress></CircularProgress>}
            {user?.email && <Alert severity="success">Your are successfully registered!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Container>
        </Box>
        <Footer></Footer>
        </>
    );
};

export default Register;