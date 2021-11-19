import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, isLoading, signInWithGoogle, authError, loginUser} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);
    }
    return (
        <>
        <Header></Header>
        <Box sx={{maxWidth:"600px", margin:"0 auto"}}>
            <Container sx={{pt:5, pb:10}}>
                <Grid container spacing={2}>
                    <Grid sx={{mt:8}} item xs={12} md={12}>
                    <Typography  variant="h4" sx={{textAlign:"center"}} gutterBottom>
                    Please Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField 
                        sx={{width:1, m:1}}
                        id="standard-basic" 
                        name="email"
                        onBlur={handleOnChange}
                        type="email"
                        label="Your Email" 
                        variant="standard" 
                        />
                        <TextField 
                        sx={{width:1, m:1}}
                        id="standard-basic" 
                        label="Your Password" 
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" 
                        type="password"
                        />
                        <Button className="my-btn" sx={{width:1, m:1}} variant="contained" type="submit">Login</Button>
                        <NavLink style={{textDecoration:'none'}} to="/register">
                            <Button variant="text">New user? Please register here</Button>
                        </NavLink>  
                        {isLoading && <CircularProgress></CircularProgress>}
                        {user?.email && <Alert severity="success">Login Successfull!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}  
                    </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Footer></Footer>
        </>
    );
};

export default Login;