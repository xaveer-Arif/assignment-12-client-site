import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { CircularProgress, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const [userData, setUserData] = useState({})
    const [error, setError] = useState('')
    const {register , isLoading} = useAuth()
    const history = useHistory()
    const location = useLocation()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newUserData = {...userData}
        newUserData[field] = value
        setUserData(newUserData)
    }
    
    const handlerUserForm = e => {
        e.preventDefault()
        alert('data of form')
        if(userData.password1 !== userData.password2){
            return setError("password doesn't match")
        }
        // console.log(userData)
        register(userData.email, userData.password1, history, location)

        setError('')
        document.getElementById("myform").reset();
     
    }
    return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm = {12} md = {6}>
               <img style = {{width:'100%'}} src="https://i.ibb.co/9tybF8Y/4957136.jpg" alt="" />
            </Grid>

            <Grid item xs={12}  sm = {12} md = {4} style = {{background:'white',     height:'200px', width: '2px', marginTop : '85px'}}>

            <Typography variant="h3" component="div"    gutterBottom>
                Register
            </Typography>
                
           {!isLoading &&  <form onSubmit = {handlerUserForm} id = 'myform'>
                {error}

                <TextField
                required
                id="standard-basic" 
                label="Your name"
                name = 'name'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />

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
                type = 'password'
                name = 'password1'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />

                <TextField
                required
                autoComplete="off"
                id="standard-basic" 
                label="confirm password"
                type = 'password'
                name = 'password2'
                onBlur = {handleOnBlur}
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />
                
                <Button type = 'submit' variant="contained" className = 'mt-2' >Submit</Button>

            </form> }
            {isLoading && <CircularProgress />}
                
                <p className = 'mt-3'>New User? <Link to = '/login'> Click Here</Link></p>
               
            </Grid>
  
</Grid>

    </Box>
    );
};

export default Register;