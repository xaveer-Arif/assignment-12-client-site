import { Card, CardActions, CardContent, Typography, Button, Grid, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Comment = () => {
    // const [value, setValue] = React.useState(4);
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[comments])
    return (
        <div>
            <h1>review</h1>
        <Grid container spacing={2}>
            {comments.map(comment =>
                <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {comment.review}
            </Typography>
            <Typography variant="h6" component="div" sx={{fontWeight:'bold', color: 'blue'}}>
              {comment.name}
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign:'left' }} color="text.secondary">
              {comment.comment}
            </Typography>
            <Typography variant="body2">
             
            </Typography>
          </CardContent>
          {/* <Typography component="legend">Controlled</Typography> */}
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Rating name="read-only" value={comment.ratings} readOnly />
     
         
        </Card>
                </Grid>
            )
            
}
    </Grid>
        </div>
    );
};

export default Comment;