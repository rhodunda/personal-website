import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from './ImageCarousel.module.css'

const carousel = (props) => {

return (
    <Carousel
    interval={null}>
  <Carousel.Item
  className={styles.carousel}
  >
    <img
      className= {styles.img}
      src={props.image1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item 
 >
    <img
      className="d-block w-100"
      src={props.image2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item
 >
    <img
      className="d-block w-100"
      src={props.image3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        )
    
    }




export default carousel