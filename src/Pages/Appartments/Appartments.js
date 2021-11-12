import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation';
import Appartment from './Appartment/Appartment';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Appartments = () => {
    const [appartments, setAppartments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAppartments(data))
    },[])
    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <Navigation/>  
            <h1>appartmetns {appartments.length}</h1>
            
            <Grid container spacing={2}>
            {
                appartments.map(appartment => <Appartment
                key = {appartment._id}
                appartment = {appartment}
                ></Appartment>)
            }
            </Grid>
        </Box>

    );
};

export default Appartments;