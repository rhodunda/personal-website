import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../../UI/Button/Button'
import Carousel from '../../ImageCarousel/Image Carousel'


const ProjectCard = (props) => {



return (
    <div className={styles.coupon}>
        <h2 className={styles.idTab}>Project</h2>
        <h3 className={styles.NamePlate}>{props.name}</h3>
        <Carousel
        image1={props.picture_one}
        image2={props.picture_two}
        image3={props.picture_three}>
        {/* <img src={props.img} alt="Avator" className={styles.projectImg} /> */}
        </Carousel>
        <p className={styles.container}>{props.descripton}</p>  
        <Button 
        link={props.changed} 
        disabled={!props.disabledCheck}
         >{props.changed ? ' link to website' : 'link unavailable' } </Button>
    </div>
    )

}

export default ProjectCard