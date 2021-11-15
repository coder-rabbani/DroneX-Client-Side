import {Grid, Typography, Box, Paper } from '@mui/material';
import quote from '../../../images/left-quote.png'
import Rating from 'react-rating';

const Review = (props) => {
    const {name, rating, description} = props.review;

    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{boxShadow:"0 0 10px 0px rgba(0, 0, 0, 0.1)", p:2}} >
                <img  width="30px" src={quote} alt="" />
                <Box sx={{textAlign:"center", mt:-2}}>
                    <Typography  sx={{fontSize:"16px !important", lineHeight:"24px !important"}} style={{padding:"10px 0"}} variant="body2">{description}</Typography>
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <Typography  sx={{fontSize:"16px !important", pt:1}}  variant="body1"> <b>- {name}</b></Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Review;