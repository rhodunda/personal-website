import React from 'react'
import styles from './ProjectCard.module.css'


const ProjectCard = (props) => (
<div className={styles.coupon}>
    <h2 className={styles.idTab}>Project</h2>
    <div className={styles.container}></div> 
    <h3 className={styles.container}>{props.name}</h3>

    <img className={styles.container} src={props.img} alt="Avator" />
    <div className={styles.container}></div> 
    <p className={styles.container}>{props.descripton}</p>
        
</div>

)

export default ProjectCard