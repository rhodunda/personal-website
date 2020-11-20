import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const carousel = (props) => {

return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image1}
      alt="First slide"
      interval= 'null'
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image2}
      alt="Third slide"
      interval= 'null'
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image3}
      alt="Third slide"
      interval= 'null'
    />
  </Carousel.Item>
</Carousel>
        )
    
    }




export default carousel