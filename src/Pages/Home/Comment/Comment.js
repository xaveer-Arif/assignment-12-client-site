import { Card, Typography, Grid, Rating, CircularProgress, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Comment = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[comments])
    return (
        <div className = 'mb-5'>
            <h1>Review</h1>
            {!comments && <CircularProgress />}
        <Grid container spacing={2}>
            {comments.map(comment =>
                <Grid item xs={12} md = {4}>
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
          
      <Rating name="read-only" value={comment.ratings} readOnly />
     </Card>
    </Grid>
)}
    </Grid>
        </div>
    );
};

export default Comment;