import React from 'react'
import styles from './About.module.css'

const About = () => (
    <div className={styles.AboutMain}>
        <h3>About</h3>
        <h4 className={styles.AboutSec}>name</h4>
        <h4>email</h4>
        <p className={styles.AboutSec}>skills</p>
        <h4>intrest</h4>
    </div>
)


export default About