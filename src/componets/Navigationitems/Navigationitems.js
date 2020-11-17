import React from 'react'
import styles from './Navigationitems.module.css'
// import Logo from '../../assets/images/Logo.png'
import NavigationItem from '../Navigationitem/NavigationItem'


const navigationItems = () => (
    <ul className={styles.NavItems}>
        <h3 className={styles.name}>Bryan Rhodunda</h3>
        <NavigationItem>Projects</NavigationItem>
        <NavigationItem>GitHub</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
        {/* <img src={Logo} alt="avatar"></img> */}
    </ul>
)


export default navigationItems

