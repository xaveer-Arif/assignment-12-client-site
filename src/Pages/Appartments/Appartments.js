import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation';
import Appartment from './Appartment/Appartment';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../Shared/Footer/Footer';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

const Appartments = () => {
    const [appartments, setAppartments] = useState([])
    useEffect(() => {
        fetch('https://guarded-retreat-48750.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setAppartments(data))
    },[])
    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <Navigation/>  
            <Container>
            <Typography variant="h3" style = {{fontWeight: '600', color:'gray' , padding: '5px 0'}} >
                Appartments
            </Typography>;
            
            <Grid container spacing={4}>
            {
                appartments.map(appartment => <Appartment
                key = {appartment._id}
                appartment = {appartment}
                ></Appartment>)
            }
            </Grid>
            </Container>
            <Footer></Footer>
        </Box>

    );
};

export default Appartments;