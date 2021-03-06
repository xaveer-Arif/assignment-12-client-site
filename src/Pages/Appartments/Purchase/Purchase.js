import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button, TextField, Input } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const Purchase = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const { formState: { errors } } = useForm();
    const [userData, setUserData] = useState({})
    const [error, setError] = useState('')
    const [order, setOrder] = useState([])

    const [appartment, setAppartment] = useState([])
    const {name, price, img, _id, details} = appartment
    const {email, displayName} = user
    useEffect(() => {
        fetch('https://guarded-retreat-48750.herokuapp.com/services')
        .then(res => res.json())
        .then(services =>{
           const singleAppointment = services.find(service => service._id === id)
           setAppartment(singleAppointment)
        })
    },[])
    
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newUserData = {...userData}
        newUserData[field] = value
        setUserData(newUserData)
    }
    const loginData = {
        ...userData,
        name,
        img,
        price,
        details,
        email,
        displayName,
        status:'pendimg'
    }
    const handlerUserForm = e => {
        e.preventDefault()
        fetch('https://guarded-retreat-48750.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then()
        

        document.getElementById("myform").reset();
     
    }
    return (
        <>
            <Navigation/>
        <Container>
            <h1>purchase {id}</h1>
            <h1>{appartment.name}</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm ={12} md = {6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={appartment.img}
                         alt="green iguana"
                    />
                    <CardContent>
                       
                        <Typography gutterBottom variant="h5" component="div">
                        {appartment.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {appartment.details}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Price = {appartment.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
        <Link to = {`/purchase/${appartment._id}`}>
                        <Button variant = 'contained' size="small">Learn More</Button>
                        </Link>
                    </CardActions>
                    </Card>
                </Grid>
        {/*/...... form........ */}
                <Grid item xs={12} sm ={12} md = {6}>
                <form onSubmit = {handlerUserForm} id = 'myform'>
                
                <TextField
                id="standard-basic" 
                value = {appartment.name}    
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />

                <TextField
                id="standard-basic" 
                value = {appartment.price}    
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />

                <TextField
                id="standard-basic" 
                value = {user?.email}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" /> 

                <TextField
                id="standard-basic" 
                value = {user?.displayName}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" /> 

                <TextField
                required
                id="standard-basic" 
                label="contact number"
                type = 'number'
                name = 'number'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" /> 

                <TextField
                required
                id="standard-basic" 
                label="address"
                type = 'text'
                name = 'address'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" /> 

                
                <br />
                <Button type = 'submit' variant="contained" className = 'mt-2' >Submit</Button>

            </form> 
                </Grid>
  
            </Grid>
        
        </Container>
        </>
    );
};

export default Purchase;
