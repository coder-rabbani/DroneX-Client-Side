import { Container } from '@mui/material';
import React from 'react';
import welcome from '../../../images/welcome.svg';

const DashboardHome = () => {
    return (
        <Container>
            <img src={welcome} alt="" />
        </Container>
    );
};

export default DashboardHome;