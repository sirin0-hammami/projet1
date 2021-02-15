import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

export default function(){
    return (
<Carousel style={{ width:"70%", marginLeft:"15%"}}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to our clothes store</h3>
      <p>We provide the top clothing quality</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Here we have clothes for men</h3>
      <p>All men clothes are available in our store</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>We have clothes for women</h3>
      <p>Here you can find your unique style</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}