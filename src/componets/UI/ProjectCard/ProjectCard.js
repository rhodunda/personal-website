import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../../UI/Button/Button'


const ProjectCard = (props) => {



return (
    <div className={styles.coupon}>
        <h2 className={styles.idTab}>Project</h2>
        <h3 className={styles.NamePlate}>{props.name}</h3>
        <img src={props.img} alt="Avator" className={styles.projectImg} />
        <p className={styles.container}>{props.descripton}</p>  
        <Button 
        link={props.changed} 
        disabled={!props.disabledCheck}
         >Link to Website</Button>
    </div>
    )

}

export default ProjectCard