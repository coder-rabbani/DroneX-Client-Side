import { Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios');


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://drone-server-bd.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Reviews added successfully')
            }
            reset();
        })
    };
    return (
        <Container sx={{pt:5, pb:10}}>
            <Typography variant="h4" sx={{textAlign:"center"}}>Add Your Reviews</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" placeholder="Your Name" {...register("name")} />
                <br />
                <input className="input-field" type="number" placeholder="Rate the service (1-5)" {...register("rating")} min="1" max="5" />
                <br/>
                <textarea className="input-field" placeholder="Write Your Feedback" {...register("description")} />
                <br/>
                <input className="input-field my-btn" type="submit" />
            </form>
        </Container>
    );
};

export default AddReview;