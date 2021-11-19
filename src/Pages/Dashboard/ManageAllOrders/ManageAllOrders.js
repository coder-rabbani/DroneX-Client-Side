import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import axios from 'axios';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        axios.get('https://drone-server-bd.herokuapp.com/orders')
        .then(res=>setOrders(res.data))
    },[]);

    const handleDelete = id => {
        const url = `https://drone-server-bd.herokuapp.com/orders/${id}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('do you want to delever it?')
                const remaining = orders.filter(product=>product._id !== id);
                setOrders(remaining);
            }
      
        })
    }

    return (
        <Container>
            <h2>Manage All Orders</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((order) => (
                        <TableRow
                        key={order._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {order.name}
                        </TableCell>
                        <TableCell align="left">{order.title}</TableCell>
                        <TableCell align="left">{order.email}</TableCell>
                        <TableCell align="left">{order.phone}</TableCell>
                        <TableCell align="left">{order.address}</TableCell>
                        <TableCell align="left">${order.price}</TableCell>
                        <TableCell align="left">
                        <Button onClick={()=>handleDelete(order._id)} variant="contained" color="error">Delever order</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;