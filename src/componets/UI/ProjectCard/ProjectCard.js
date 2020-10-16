import React from 'react'
import styles from './ProjectCard.module.css'


const ProjectCard = (props) => (
<div className={styles.coupon}>
<h2>Project</h2>
<div className={styles.container}>
<h3>{props.name}</h3>
</div>
<img src={props.img} alt="Avator" />
<div className={styles.container} >
    
<p>{props.descripton}</p>
</div>
</div>

)

export default ProjectCard