import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import notfound from '../../images/notfound.svg'
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Header />
            <Container sx={{textAlign:"center", py:5}}>
                <Box>
                    <img style={{maxWidth:"50%"}} src={notfound} alt="" />
                    <h2>Sorry! The page you are looking for is not found! </h2>
                    <Link to="/"><Button className="my-btn">Go Back Home</Button></Link>
                </Box>  
            </Container>
            <Footer/>
        </div>
    );
};

export default NotFound;