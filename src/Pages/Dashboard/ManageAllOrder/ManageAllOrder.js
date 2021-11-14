import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography,Button } from '@mui/material';
import useFirebase from '../../Hooks/useFirebase';

const ManageAllOrder = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://guarded-retreat-48750.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])

    //delete items 

    const deleteItem = id => {
        fetch(`https://guarded-retreat-48750.herokuapp.com/deleteOrder/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(services => {
            window.confirm('are you sure to delete order')
                if(services.deleteCount > 0){
                    const remaningItems = services.filter(servcie => servcie._id !== id)
                    setProducts(remaningItems)
                }
        })
    }
    
    // accept order

    const orderAccept = id => {
        const orderId = {id}
        fetch('https://guarded-retreat-48750.herokuapp.com/status', {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderId)
        })
    }
    return (
        <div>
            <h1>manage all order</h1>
       <Grid container spacing={2}>
            
               { products.map(product => 
                <Grid item xs={12} md ={4}>
                    <Card sx={{ maxWidth: 300 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image={product.img}
                     alt="green iguana"
                   />
                   <CardContent>
                     
                     <Typography gutterBottom variant="h5" component="div"style = {{color:'#2F2C28', fontWeight:'800'}}>
                      {product.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {product.details}
                     </Typography>
                     <Typography variant="h6" color="text.secondary">
                    <span style = {{color:'black', fontWeight:'800'}}>Price</span>
                     : ${product.price}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      
                     <span style = {{color:'black', fontWeight:'800'}}>  Status :</span> 
                     <span style = {{color:'red', fontWeight:'800'}}>{product.status}</span> 
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      
                     <span style = {{color:'black', fontWeight:'800'}}>  email :</span> 
                     <span style = {{color:'red', fontWeight:'800'}}>{product.email}</span> 
                     </Typography>
                     
                   </CardContent>
                   <CardActions>
                       
                <Button 
                onClick  = {() => deleteItem(product._id)}
                variant = 'contained'
                style = {{background: 'red' , margin:'auto'}}
                size="small"
                >Delete</Button> 

                <Button 
                onClick = {() => orderAccept(product._id)} 
                style = {{  margin:'auto'}}
                variant = 'contained' 
                size="small">Accept</Button>
                    
                   </CardActions>
                 </Card>
                 </Grid>
                 )}
            </Grid>

        </div>
    );
};

export default ManageAllOrder;