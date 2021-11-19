import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://drone-server-bd.herokuapp.com/allProducts')
        .then(res=>setProducts(res.data))
    },[]);

    const handleDelete = id => {
        const url = `https://drone-server-bd.herokuapp.com/allProducts/${id}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Do you want to delete?');
                const remaining = products.filter(product=>product._id !== id);
                setProducts(remaining);
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
                        <TableCell>Image</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product) => (
                        <TableRow
                        key={product._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left">{product.title}</TableCell>
                        <TableCell component="th" scope="row">
                           <img style={{maxWidth:"100px"}} src={product.img} alt="" /> 
                        </TableCell>
                        <TableCell align="left">
                            <Button onClick={()=>handleDelete(product._id)} variant="contained" color="error">Delete</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageProducts;