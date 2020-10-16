import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import styles from './Layout.module.css'
import Toolbar from '../../componets/Toolbar/Toolbar'



class Layout extends Component {
    render () {
        return(
            <Aux>
                <Toolbar/>
                <main className={styles.main}>main
                
                
                
                </main>
            </Aux>
        )
    }
}

export default Layout