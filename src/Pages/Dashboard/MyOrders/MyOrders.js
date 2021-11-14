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
        fetch(`https://guarded-retreat-48750.herokuapp.com/myorder?email=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
    
    },[user])
    const deleteItem = id => {
        fetch(`https://guarded-retreat-48750.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(services => {
            window.confirm('are you sure to delete order')
                if(services.deleteCount > 0){
                    const orderItems = services.filter(servcie => servcie._id !== id)
                    setOrders(orderItems)
                }
        })
    }
    return (
            <div>
             <Grid container spacing={2}>
            
               { orders.map(order => 
                <Grid item xs={12} md ={4}>
                    <Card sx={{ maxWidth: 'auto' }}>
                   <CardMedia
                     component="img"
                     height="140"
                     image={order.img}
                     alt="green iguana"
                   />
                   <CardContent>
                     
                     <Typography gutterBottom variant="h5" component="div" >
                     <span style = {{color:'#2F2C28', fontWeight:'800'}}>{order.name}</span>
                     </Typography>

                     <Typography variant="body1" color="text.secondary">
                     {order.details}
                     </Typography>

                     <Typography variant="body1" color="text.secondary">
                     <span style = {{color:'black', fontWeight:'800'}}>status</span> :  
                     <span style = {{color:'red', fontWeight:'800'}}>{order.status}</span>
                     </Typography>

                     <Typography variant="body1" color="text.secondary">
                     <span style = {{color:'black', fontWeight:'800'}}>email : </span>
                     <span style = {{color:'red', fontWeight:'800'}}>{user.email}</span>
                     </Typography>
                   </CardContent>
                   <CardActions>
                     
                    <Button 
                    onClick  = {() => deleteItem(order._id)} 
                    style = {{paddingRight: "50%", paddingLeft: "50%"}}
                    variant = 'contained'
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

export default MyOrders;
