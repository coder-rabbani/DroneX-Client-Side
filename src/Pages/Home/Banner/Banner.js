import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import drone from '../../../images/banner-drone.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Grid sx={{py:10}} container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography className="banner-title" sx={{fontWeight:'bold !important', color:"#013650", textAlign:'center'}} variant="h2" component="div" gutterBottom>
                        RECORD YOUR EPIC <br /> <span style={{color:"#00cf5d"}}> ADVENTURES</span>
                    </Typography>
                    <p style={{maxWidth:'700px', margin:"auto", textAlign:'center'}}>Drone X is a precision engineered drone which is specifically designed for easy flying, making it perfect to fly inside or to record action shots whilst on the move. Its foldable structure and lightweight design makes it an essential item for any adventure!</p>
                    <img src={drone} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;