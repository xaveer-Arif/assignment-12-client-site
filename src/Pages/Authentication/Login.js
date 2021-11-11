import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { Link, useHistory, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const [userData , setUserData] = useState({})
    const {signIn, isLoading} = useAuth()
    const history = useHistory()
    const location = useLocation()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newUserData = {...userData}
        newUserData[field] = value
        setUserData(newUserData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userData)
        signIn(userData.email, userData.password, history, location)
        document.getElementById("myForm").reset();

    }
    return (
        <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm = {12} md = {6}>
               <img style = {{width:'100%'}} src="https://i.ibb.co/9tybF8Y/4957136.jpg" alt="" />
            </Grid>

            <Grid item xs={12}  sm = {12} md = {4}  style = {{background:'white',     height:'200px', width: '2px', marginTop : '85px'}}>

            <Typography variant="h3" component="div"    gutterBottom>
                Log In
            </Typography>
                
              {!isLoading && <form onSubmit = {handleSubmit} id = 'myForm'>
               
                <TextField
                required
                id="standard-basic" 
                label="Your Email"
                type = 'email'
                name = 'email'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />

                <TextField
                required
                autoComplete="off"
                id="standard-basic" 
                label="password"
                name = 'password'
                type = 'password'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />
                <br />
                
                <Button type = 'submit' variant="contained" className = 'mt-2' >LogIn</Button>
                </form> }
                {isLoading &&   <CircularProgress />}
                <p className = 'mt-3'>New User? <Link to = '/register'>Register Now</Link></p>
               
            </Grid>
  
</Grid>

    </Box>
    );
};

export default Login;