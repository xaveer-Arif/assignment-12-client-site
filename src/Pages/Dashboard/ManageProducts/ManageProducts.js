import { Card, CardActions, CardContent, CardMedia, Grid, Typography,Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])

    const deleteItem = id => {
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
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
            <h1>manage product</h1>
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
                     
                     <Typography gutterBottom variant="h5" component="div">
                         <span style = {{color:'#2F2C28', fontWeight:'800'}}>{product.name}</span>
                     </Typography>

                     <Typography variant="body2" color="text.secondary">
                     <span style = {{ fontWeight:'800'}}>{product.details}</span>
                     </Typography>

                     <Typography variant="h6" color="text.secondary">
                     <span style = {{color:'black', fontWeight:'800'}}>Price</span> :
                     <span style = {{ fontWeight:'800'}}>
                    ${product.price}</span>
                     </Typography>
                     
                   </CardContent>
                   <CardActions>
                       
                <Button
                onClick  = {() => deleteItem(product._id)} 
                variant = 'contained' 
                style = {{margin:'auto', paddingRight: '50%' , paddingLeft: '50%'}}
                size="small"
                >Delete</Button> 
                    
                   </CardActions>
                 </Card>
                 </Grid>
                 )}
            </Grid>  
        </div>
    );
};

export default ManageProducts;