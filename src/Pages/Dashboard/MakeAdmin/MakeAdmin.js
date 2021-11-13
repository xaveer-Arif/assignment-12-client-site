import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = {email}
        console.log(user)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
        document.getElementById("myForm").reset();

        e.preventDefault()

    }
    
    return (
        <div>
                <h1>Create New Admin</h1>
            <form onSubmit = {handleSubmit} id = {'myForm'}>
            <TextField
            sx ={{width:'50%'}}
            id="outlined-basic"
            label="Outlined"  
            name = 'email'
            onChange = {handleOnBlur}
            variant="outlined" />
            <br/><br/>
            <Button type = 'submit' variant="contained">New Admin</Button>


            </form>
             

        </div>
    );
};

export default MakeAdmin;