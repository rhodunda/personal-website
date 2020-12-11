import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../../UI/Button/Button'
import Carousel from '../../ImageCarousel/Image Carousel'
import Alert from 'react-bootstrap/Alert'


const ProjectCard = (props) => {
 
    let alert = <p></p>
    
    console.log(props.name, props.heroku)

    if(props.heroku === true){
            alert = 
        <Alert variant="danger">
                <p >This projects have been deployed using Heroku's free plan.
                    Both frontend and backend servers will take about 15 seconds to wake.
                </p>
        </Alert>
    
       
    }

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
        {alert} 
        <Button 
        link={props.changed} 
        disabled={!props.disabledCheck}
        >{props.changed ? ' link to website' : 'link unavailable' } </Button>
    </div>
    )

}

export default ProjectCard