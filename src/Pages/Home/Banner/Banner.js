import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/young-woman-listening-music-earphones-her-appartment_1303-29275.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
