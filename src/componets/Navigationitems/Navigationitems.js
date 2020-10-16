import React from 'react'
import styles from './Navigationitems.module.css'

import NavigationItem from '../Navigationitem/NavigationItem'


const navigationItems = () => (
    <ul className={styles.NavItems}>
        <h3>Bryan Rhodunda</h3>
        <NavigationItem>Projects</NavigationItem>
        <NavigationItem>GitHub</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
    </ul>
)


export default navigationItems
