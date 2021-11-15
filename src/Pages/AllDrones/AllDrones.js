import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const AllDrones = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://drone-server-bd.herokuapp.com/allProducts')
        .then(res=>setProducts(res.data))
    },[]);
    return (
        <Container sx={{py:10}}>
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
        </Container>
    );
};

export default AllDrones;