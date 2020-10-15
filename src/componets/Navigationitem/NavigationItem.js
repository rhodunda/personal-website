import React from 'react'
import styles from './Navigationitem.module.css'

const navigationItem = (props) => (
    <li className={styles.navLink}>{props.children}</li>
)


export default navigationItem