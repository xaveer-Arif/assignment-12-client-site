import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



const Appartment = ({appartment}) => {
    const {details, name, img, _id, price} = appartment
    return (
<Grid item xs={12} md ={4}>
       <Card sx={{ maxWidth: 'auto' }}>
      <CardMedia
        component="img"
        height="140"
        image={img  }
        alt="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
         {details}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          <span style = {{color:'black', fontWeight:'800'}}>Price</span>
          : ${price}
        </Typography>

      </CardContent>
      <CardActions>
        <Link to = {`/purchase/${_id}`} style = {{margin: 'auto', textDecoration:'none'}} >
        <Button 
        variant = 'contained'
        style = {{background:'red'}}  
        size="small" 
        >purchase</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>
    );
};

export default Appartment;