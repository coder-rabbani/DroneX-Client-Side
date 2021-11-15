import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    const {_id, title, description, img, price} = props.product;
    
    const history = useHistory();

    const handleSingleService = id =>{
        const url = `/allProducts/${id}`;
        history.push(url);
    }
    return ( 
        <Grid item xs={12} md={4}>
            <img src={img} alt="" />
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1"><b>Price: ${price}</b></Typography>
            <Typography style={{padding:"10px 0"}} variant="body2">{description.slice(0, 120)}</Typography>
            <Button onClick={()=>handleSingleService(_id)} className="my-btn" variant="contained">Buy Now</Button>
        </Grid>
    );
};

export default Product;