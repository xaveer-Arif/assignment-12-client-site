import { MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([]) 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview)

    }
    const handleSubmit = e => {
        e.preventDefault()
        fetch('https://guarded-retreat-48750.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then()
        document.getElementById("myform").reset();
    }
    const currencies = [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
      ];
      
        const [currency, setCurrency] = React.useState('EUR')
      
        const handleChange = (event) => {
          setCurrency(event.target.value);
        };
    return (
        <div component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <h5>Review</h5>
            <form onSubmit = {handleSubmit} id = 'myform'>
                <TextField 
                required
                id="outlined-basic" 
                style = {{width: '50%', marginRight:'5px'}}
                name = 'name'
                onBlur = {handleOnBlur}
                label="Your Name" 
                variant="outlined" />

            <TextField 
            required
            id="outlined-basic" 
            style = {{width: '50%', marginRight:'5px',marginTop:'20px'}}
            name = 'comment'
            onBlur = {handleOnBlur}
            label="Review" 
            variant="outlined" />

             <TextField
          id="filled-select-currency"
          select
          label="Rate Now"
          name = 'ratings'
          style = {{width: '50%', marginTop:'20px'}}
          value={currency}
          onBlur = {handleOnBlur}
          onChange={handleChange}
          helperText="Rate us"
          variant="outlined"
        >
          {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              
            </MenuItem>
          ))}
        </TextField> <br />
        <button type = 'submit'>submit</button>
            </form>
            

        </div>
    );
};

export default Review;