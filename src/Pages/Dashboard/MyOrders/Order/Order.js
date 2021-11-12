import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Order = ({order}) => {
    const {name,img,details,status,_id,email} = order;
    const deleteItem = id => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
                if(data.deleteCount > 0){
                    console.log(data)
                }
        })
        // console.log(id)
    }
    return (
       
            <Grid item xs={8} md ={4}>
       <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         details : {details}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         status: {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         email: {email}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link to = {`/purchase/${_id}`}>
        <Button variant = 'contained' size="small">Learn More</Button>
        </Link> */}
        
        <Button onClick  = {() => deleteItem(_id)} variant = 'contained' size="small">Delete</Button>
       
      </CardActions>
    </Card>
</Grid>
      
    );
};

export default Order;