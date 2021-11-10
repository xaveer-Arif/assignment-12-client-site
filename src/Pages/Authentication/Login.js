import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Box>
        <Grid container spacing={2}>
            <Grid item xs={6}>
               <img style = {{width:'100%'}} src="https://i.ibb.co/9tybF8Y/4957136.jpg" alt="" />
            </Grid>

            <Grid item xs={4} style = {{background:'white',     height:'200px', width: '2px', marginTop : '70px'}}>

            <Typography variant="h3" component="div"    gutterBottom>
                Log In
            </Typography>
                
                <form>
               
                <TextField
                id="standard-basic" 
                label="Your Email"
                type = 'email'
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />
                <TextField
                id="standard-basic" 
                label="password"
                style = {{width:'80%', margin:'5px'}}
                variant="standard" />
                <br />
                
                <Button type = 'submit' variant="contained" className = 'mt-2' >LogIn</Button>
                </form>
                <p className = 'mt-3'>New User? <Link to = '/register'>Register Now</Link></p>
               
            </Grid>
  
</Grid>

    </Box>
    );
};

export default Login;