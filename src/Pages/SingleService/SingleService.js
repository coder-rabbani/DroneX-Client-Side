import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const SingleService = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://drone-server-bd.herokuapp.com/allProducts/${id}`)
        .then(res=>setProduct(res.data))
    }, []);

    const {img, title, description, price} = product;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
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
                        <input className="input-field" placeholder="Your Name" {...register("name")} />
                        <br />
                        <input type="email" className="input-field" placeholder="Your Email" {...register("email")} />
                        <br />
                        <input className="input-field" placeholder="Address" {...register("address")} />
                        <br />
                        <input className="input-field" type="number" placeholder="Phone No" {...register("phone")} />
                        
                        <input className="input-field my-btn" type="submit" value="Place Order"/>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleService;