import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
// import Order from './Order/Order';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MyOrders = () => {
    const {user} = useFirebase()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myorder?email=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
    
    },[orders])
    // console.log(order)
    // console.log(user.email)
    const deleteItem = id => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(services => {
            window.confirm('are you sure to delete order')
                if(services.deleteCount > 0){
                    const orderItems = services.filter(servcie => servcie._id !== id)
                    console.log(orderItems)
                    setOrders(orderItems)
                }
        })
        // console.log(id)
    }
    return (
            <div>
             <Grid container spacing={2}>
            
               { orders.map(order => 
                <Grid item xs={8} md ={4}>
                    <Card sx={{ maxWidth: 300 }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image={order.img}
                     alt="green iguana"
                   />
                   <CardContent>
                     
                     <Typography gutterBottom variant="h5" component="div">
                       name: {order.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      details : {order.details}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      status: {order.status}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      email: {user.email}
                     </Typography>
                   </CardContent>
                   <CardActions>
                     
                     <Button onClick  = {() => deleteItem(order._id)} variant = 'contained' size="small">Delete</Button>
                    
                   </CardActions>
                 </Card>
                 </Grid>
                 )}
            </Grid> 
          </div>

             
     
);
};

export default MyOrders;
