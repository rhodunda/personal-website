import React from 'react'
import styles from './Navigationitem.module.css'
// import linkedin from '../../assets/images/linkedin.png'
// import medium from '../../assets/images/meduim.png'

const navigationItem = (props) => (
    <a  href={props.link}className={styles.navLink} target="_blank" rel="noopener noreferrer" >
    <li >{props.children}</li>
    </a>
)


export default navigationItem