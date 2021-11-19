import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e =>{
        e.preventDefault();

        const user = {email}

        fetch('https://drone-server-bd.herokuapp.com/users/admin', {
            method:"PUT", 
            headers:{
                'content-type':'application/json'
            }, 
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true);
            }
        })

    }
    return (

        <form onSubmit={handleMakeAdmin}>
            <TextField 
            sx={{width:"50%", mb:2}}
            onBlur={handleOnBlur} 
            type="email" 
            label="Admin Email Address" 
            variant="standard" />
            <br />
            <Button sx={{width:"20%"}} className="my-btn" type="submit" variant="contained">Make Admin</Button>
            {success && <Alert severity="success">Made admin Successfull!</Alert>}
        </form>
        
    );
};

export default MakeAdmin;