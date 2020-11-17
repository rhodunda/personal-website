import React from 'react'
import styles from './About.module.css'

const About = () => (
    <div className={styles.AboutMain}>
        <h3>About</h3>
        <h4 className={styles.AboutSec}>Bryan Rhodunda</h4>
        <h4 className={styles.Description}>I am a full stack web developer with a natural affinity 
    for learning and experimenting to find creative solutions to 
    complex problems. I have experience in Ruby on Rails and JavaScript, and React/Redux
    based programming. Possess strong skills in project management and 
    application concept designs that help companies better plan and create
     modern user-friendly business solutions.</h4>
        <p className={styles.AboutSec}>Ruby On Rails, JavaScript, React</p>
        <h4 className={styles.Intrest}>intrest:
            Programming,
            Video Games,
            traveling,
            Golf,
        </h4>
    </div>
)


export default About