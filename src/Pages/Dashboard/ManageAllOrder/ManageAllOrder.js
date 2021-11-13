import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography,Button } from '@mui/material';

const ManageAllOrder = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allorder')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])

    const deleteItem = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(services => {
            window.confirm('are you sure to delete order')
                if(services.deleteCount > 0){
                    const remaningItems = services.filter(servcie => servcie._id !== id)
                    console.log(remaningItems)
                    setProducts(remaningItems)
                }
        })
        // console.log(id)
    }
    return (
        <div>
            <h1>manage all order</h1>
       <Grid container spacing={2}>
            
               { products.map(product => 
                <Grid item xs={8} md ={4}>
                    <Card sx={{ maxWidth: 300 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image={product.img}
                     alt="green iguana"
                   />
                   <CardContent>
                     
                     <Typography gutterBottom variant="h5" component="div">
                       name: {product.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      details : {product.details}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      details : {product.price}
                     </Typography>
                     
                   </CardContent>
                   <CardActions>
                       
                {<Button onClick  = {() => deleteItem(product._id)} variant = 'contained' size="small">Delete</Button> }
                    
                   </CardActions>
                 </Card>
                 </Grid>
                 )}
            </Grid>

        </div>
    );
};

export default ManageAllOrder;