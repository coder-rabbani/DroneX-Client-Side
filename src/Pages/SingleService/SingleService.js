import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const SingleService = () => {
    const [product, setProduct] = useState({});
    const [success, setSucess] = useState(false);
    const {id} = useParams();
    const {user} = useAuth();

    useEffect(()=>{
        axios.get(`https://drone-server-bd.herokuapp.com/allProducts/${id}`)
        .then(res=>setProduct(res.data))
    }, []);

    const {img, title, description, price} = product;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://drone-server-bd.herokuapp.com/orders', {
            method:"POST", 
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)  
        }     
        )
        setSucess(true);
        reset();
    };
    return (
        <>
        <Header />
        <Container sx={{py:7}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                <img className="w-100" src={img} alt="" />
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h6">Price: ${price}</Typography>
                <Typography variant="body2">{description}</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                <Typography variant="h4" sx={{textAlign:"center"}}>Place Order</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} className="input-field" placeholder="Your Name" {...register("name")} />
                        <br />
                        <input defaultValue={user.email} type="email" className="input-field" placeholder="Your Email" {...register("email")} />
                        <br />
                        <input defaultValue={title} className="input-field" type="text" {...register("title")} required/>
                        <input defaultValue={price} className="input-field" type="text" {...register("price")} required/>
                        <input className="input-field" type="number" placeholder="Phone No*" {...register("phone")} required/>
                        <textarea rows={4} className="input-field" placeholder="Your Address*" {...register("address")} required/>
                        <br />                       
                        <input style={{width:"100%"}} className="input-field my-btn" type="submit" value="Place Order"/>
                    </form>
                    {
                        success && <Alert sx={{color:"green"}}>Success! Thanks for your order!</Alert>
                    }
                </Grid>
            </Grid>
        </Container>
        <Footer/>
        </>
    );
};

export default SingleService;