import React from 'react'
import styles from './ProjectCard.module.css'
import Button from '../../UI/Button/Button'


const ProjectCard = (props) => (
<div className={styles.coupon}>
    <h2 className={styles.idTab}>Project</h2>
    <div className={styles.container}></div> 
    <h3 className={styles.container}>{props.name}</h3>

    <img src={props.img} alt="Avator" className={styles.projectImg} />
    <div className={styles.container}></div> 
    <p className={styles.container}>{props.descripton}</p>  
    <Button/>
</div>

)

export default ProjectCard