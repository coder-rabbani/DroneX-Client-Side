import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const axios = require('axios');

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/homeProducts')
        .then(res=>setProducts(res.data))
    },[]);
    return (
        <Container sx={{pb:10}}>
            <Typography variant="h4" style={{textAlign:"center", color:"#00cf5d"}}>Our Drones</Typography>
            <Typography variant="body1" style={{textAlign:"center", maxWidth:"600px", margin:"auto"}}> Pick of the finest drones for aerial photography and filmmaking, based on our rigorous testing.</Typography>
            <Grid style={{marginTop:"20px"}} container spacing={4}>
                {
                    products.map(product=><Product
                    key={product._id}
                    product={product}
                    />)
                }
            </Grid>
            <Box sx={{textAlign:"center", py:8}}>
                <Typography variant="body1" style={{textAlign:"center", maxWidth:"600px", margin:"auto", paddingBottom:"10px"}}> If you are not convinced, then please check all drones</Typography>
                <Button className="my-btn product-btn" variant="contained">View All Drones</Button>
            </Box>
        </Container>
    );
};

export default Products;