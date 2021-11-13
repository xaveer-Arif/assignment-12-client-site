import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({})
    const [error, setError] = useState('')
    
   

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newUserData = {...productData}
        newUserData[field] = value
        setProductData(newUserData)
    }

    const handlerUserForm = e => {
        e.preventDefault()
        alert('data of form')

        const product = {productData}
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

        setError('')
        document.getElementById("myform").reset();
     
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit = {handlerUserForm} id = 'myform'>
                {error}

                <TextField
                required
                label="product name"
                name = 'name'
                onBlur = {handleOnBlur}
                style = {{width:'50%', margin:'5px'}}
                variant="standard" />

                <TextField
                required
                id="standard-basic" 
                label="details"
                name = 'details'
                onBlur = {handleOnBlur}
                style = {{width:'50%', margin:'5px'}}
                variant="standard" /> 

                <TextField
                required
                id="standard-basic" 
                label="price"
                type = 'number'
                name = 'price'
                onBlur = {handleOnBlur}
                style = {{width:'50%', margin:'5px'}}
                variant="standard" /> 

                <TextField
                required
                id="standard-basic" 
                label="image url"
                name = 'url'
                onBlur = {handleOnBlur}
                style = {{width:'50%', margin:'5px'}}
                variant="standard" /> 

                
                <br/>
                <Button type = 'submit' variant="contained" className = 'mt-2' >Submit</Button>

            </form>
        </div>
    );
};

export default AddProduct;