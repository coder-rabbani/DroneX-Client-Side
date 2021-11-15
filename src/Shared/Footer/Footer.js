import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{backgroundColor:"#F7F7F7", py:8}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography className="footer-title" variant="h5">CONTACT US</Typography>
                        <Typography className="footer-sub-title" variant="h6">Address</Typography>
                        <Typography variant="body2">17 Downtown St, Victoria, Australia.</Typography>
                        <Typography className="footer-sub-title" sx={{pt:2}} variant="h6">Email Us</Typography>
                        <Typography variant="body2">Info@dronex.com</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography className="footer-title" variant="h5">LATEST NEWS</Typography>
                        <Box className="footer-items">
                            <Typography variant="body2">Become an Affiliate</Typography>
                            <Typography variant="body2">About Drone</Typography>
                            <Typography variant="body2">Community Meetups</Typography>
                            <Typography variant="body2">Testimonials</Typography>
                            <Typography variant="body2">Gift vouchers</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography className="footer-title" variant="h5">OUR PRODUCTS</Typography>
                        <Box className="footer-items">
                            <Typography variant="body2">Product 1</Typography>
                            <Typography variant="body2">Product 1</Typography>
                            <Typography variant="body2">Product 1</Typography>
                            <Typography variant="body2">Product 1</Typography>
                            <Typography variant="body2">Product 1</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography className="footer-title" variant="h5">GET NEW UPDATES</Typography>
                        
                        <TextField
                        sx={{my:1, width:"100%"}}
                        id="filled-required"
                        placeholder="Your Name"
                        variant="filled"
                        />
                        <TextField
                        sx={{mb:1, width:"100%"}}
                        id="filled-required"
                        placeholder="Your Email"
                        variant="filled"
                        />
                        <Button sx={{width:"100%"}} variant="outlined">Send</Button> 
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;