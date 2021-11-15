import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{backgroundColor:"#F7F7F7", boxShadow:"0", color:"#013650", py:2}} position="static">
                <Toolbar className="navbar">
                <Link to="/"><img style={{width:"200px"}} src={logo} alt="" /></Link>
                    <Box className="nav-item">
                        <Link to="/all-drones">All Drones</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/login"><Button className="my-btn" variant="contained" >Login</Button></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;