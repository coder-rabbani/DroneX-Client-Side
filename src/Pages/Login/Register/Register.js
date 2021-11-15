import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box sx={{maxWidth:"600px", margin:"0 auto"}}>
        <Container sx={{pt:5, pb:10}}>
            <Typography variant="h4" sx={{textAlign:"center"}}>Please Register</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" placeholder="Your name" {...register("name")} />
                <br />
                <input type="email" className="input-field" placeholder="Your email" {...register("email")} />
                <br />
                <input className="input-field" placeholder="Your password" {...register("password")} />
                <br/>
                <input className="input-field my-btn" type="submit" value="Register" />
            </form>
        </Container>
        </Box>
    );
};

export default Register;