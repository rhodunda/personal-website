import React from 'react'
import styles from './About.module.css'

const About = () => (
    <div className={styles.AboutMain}>
        <h3>About</h3>
        <h4 className={styles.AboutSec}>Bryan Rhodunda</h4>
        <h4>discription</h4>
        <p className={styles.AboutSec}>Ruby On Rails, JavaScript, React</p>
        <h4><bold>intrest:</bold>
            Programming
            Video Games
            traveling
        </h4>
    </div>
)


export default About