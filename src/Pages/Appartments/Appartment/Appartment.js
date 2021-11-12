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
    const {details, name, img, _id} = appartment
    return (
<Grid item xs={8} md ={4}>
       <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
      <CardActions>
        <Link to = {`/purchase/${_id}`}>
        <Button variant = 'contained' size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>
    );
};

export default Appartment;