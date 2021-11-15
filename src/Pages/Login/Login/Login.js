import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../Dashboard/AddProduct/AddProduct.css'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box sx={{maxWidth:"600px", margin:"0 auto"}}>
        <Container sx={{pt:5, pb:10, textAlign:"center"}}>
            <Typography variant="h4" sx={{textAlign:"center"}}>Please Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" placeholder="Your email" {...register("email")} />
                <br />
                <input className="input-field" placeholder="Your Password" {...register("password")} />
                <input className="input-field my-btn" type="submit" value="Login"/>
            </form>
            <Link style={{borderBottom:"1px solid", color:"green", fontWeight:"600"}} to="/register">Don't have account? Please register here</Link>
        </Container>
        </Box>
    );
};

export default Login;