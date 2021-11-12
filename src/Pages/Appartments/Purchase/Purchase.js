import { ContentPasteOffSharp } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button, TextField, Input } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import Navigation from '../../Shared/Navigation';
import { useForm } from "react-hook-form";
import Appartment from '../Appartment/Appartment';
import { CircularProgress} from '@mui/material';
import { fontSize } from '@mui/system';

const Purchase = () => {
    const {id} = useParams()
    const {user} = useFirebase()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [userData, setUserData] = useState({})
    const [error, setError] = useState('')
    const [order, setOrder] = useState([])

    // console.log(user)
    const [appartment, setAppartment] = useState([])
    const {name, price, img, _id, details} = appartment
    const {email, displayName} = user
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(services =>{
           const singleAppointment = services.find(service => service._id === id)

           setAppartment(singleAppointment)
        })
    },[])
    // console.log(appartment)
   /*  fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(services =>{
       const singleAppointment = services.find(service => service._id === id)
       console.log(singleAppointment)
    }) */
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
    console.log(loginData)
    const handlerUserForm = e => {
        e.preventDefault()
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

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
{/* <form onSubmit={handleSubmit(onSubmit)}>
                 <input type = 'text' defaultValue={appartment.name} {...register("service")} /> <br />
                 <input defaultValue={appartment.price} {...register("price")} /> <br />
                 <input defaultValue={user?.displayName} {...register("name")} /> <br />
                 <input defaultValue={user?.email} {...register("email")} />
                <br />
     
                <input placeholder = 'contact number' {...register("phone", { required: true })} />
                <br />
                <input placeholder = 'address' {...register("address", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit" />
    </form> */}