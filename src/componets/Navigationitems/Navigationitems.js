import React from 'react'
import styles from './Navigationitems.module.css'
// import Logo from '../../assets/images/Logo.png'
import NavigationItem from '../Navigationitem/NavigationItem'


const navigationItems = () => (
    <ul className={styles.NavItems}>
        <h3 className={styles.name}>Bryan Rhodunda</h3>
        <NavigationItem
        link='https://www.linkedin.com/in/bryan-rhodunda-a865471ab/'>Linkedin</NavigationItem>
        <NavigationItem
        link='https://github.com/rhodunda'>GitHub</NavigationItem>
        <NavigationItem
        link='https://medium.com/@rhodunda'>Medium</NavigationItem>
    </ul>
)


export default navigationItems

