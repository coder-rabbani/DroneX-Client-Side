import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CountUp from 'react-countup';
import './Counter.css'

const Counter = () => {
    return (
        <Box sx={{backgroundColor:"#E4F5D4", pt:10, pb:15}}>
            <Container>
                <Box>
                    <Typography className="counter-heading" variant="h6">Buy Products To Get The Best Results</Typography>
                </Box>
                <Grid sx={{textAlign:"center", pt:6}} container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <CountUp className="counter"
                            start={0}
                            end={99}
                            duration={2.75}
                            suffix="%"
                            
                        />
                        <Typography className="counter-title" sx={{textAlign:"center"}} variant="body1">Product Quality</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CountUp className="counter"
                            start={0}
                            end={95}
                            duration={2.75}
                            suffix="%"
                            
                        />
                        <Typography className="counter-title" sx={{textAlign:"center"}} variant="body1">Camera + Lens</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CountUp className="counter"
                            start={0}
                            end={99}
                            duration={2.75}
                            suffix="%"
                            
                        />
                        <Typography className="counter-title" sx={{textAlign:"center"}} variant="body1">Speed and Acuracy </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={3}>
                        <CountUp className="counter"
                            start={0}
                            end={97}
                            duration={2.75}
                            suffix="%"
                            
                        />
                        <Typography className="counter-title" sx={{textAlign:"center"}} variant="body1">24/7 Support</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Counter;