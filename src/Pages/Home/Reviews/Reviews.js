import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const axios = require('axios');

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/allReviews')
        .then(res=>setReviews(res.data))
    },[]);
    return (
        <Container sx={{pb:10}}>
            <Typography variant="h4" style={{textAlign:"center", color:"#00cf5d"}}>Words from our clients</Typography>
            <Grid style={{marginTop:"20px"}} container spacing={4}>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;