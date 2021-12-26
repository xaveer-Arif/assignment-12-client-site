import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppartment } from "../../../Redux/Slices/AppartmentSlice";

const Services = () => {
  // const [appartments, setAppartments] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppartment());
    //     fetch('https://guarded-retreat-48750.herokuapp.com/homeService')
    // .then(res => res.json())
    // .then(data => setAppartments(data))
  }, []);
  const appartments = useSelector((state) => state.appartment.discover);
  return (
    <div>
      <Container>
        <h1 className="p-5">Our Services</h1>
        <Grid container spacing={4}>
          {appartments.map((appartment) => (
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={appartment.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <span style={{ color: "#2F2C28", fontWeight: "800" }}>
                      {appartment.name}
                    </span>
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {appartment.details}
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    <span style={{ color: "black", fontWeight: "800" }}>
                      Price
                    </span>
                    : ${appartment.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to={`/purchase/${appartment._id}`}
                    style={{ margin: "auto" }}
                  >
                    <Button variant="contained" size="small">
                      Buy Now
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
