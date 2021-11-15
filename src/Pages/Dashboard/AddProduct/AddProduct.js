import { Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const axios = require('axios');


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://drone-server-bd.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Reviews added successfully')
            }
            reset();
        })
    };
    return (
        <Container sx={{pt:5, pb:10}}>
            <Typography variant="h4" sx={{textAlign:"center"}}>Add a Product</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" placeholder="Add title" {...register("title")} />
                <br />
                <input className="input-field" placeholder="Image Url" {...register("img")} />
                <br />
                <input className="input-field" type="number" placeholder="Price" {...register("price")} />
                <br/>
                <textarea className="input-field" placeholder="Add Description" {...register("description")} />
                <br/>
                <input className="input-field my-btn" type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;