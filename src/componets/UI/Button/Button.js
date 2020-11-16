import React from 'react'
import styles from './Button.module.css'

const button = (props) => (
    <div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <button
    className={styles.Button}
    onClick={props.clicked}
    disabled={props.disabled}
    >{props.children}</button>
    </a>
    </div>
)

export default button 