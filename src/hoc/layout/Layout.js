import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import styles from './Layout.module.css'
import Toolbar from '../../componets/Toolbar/Toolbar'
import ProjectCards from '../../componets/ProjectCards/ProjectCards'
import Blogs from '../../componets/Blogs/Blogs'
import About from '../../componets/About/About'
import Contact from '../../componets/Contact/Contact'


class Layout extends Component {
    render () {
        return(
            <Aux>
                <Toolbar/>
                <main className={styles.main}>main
                <ProjectCards/>
                <Blogs/>
                <About/>
                <Contact/>
                
                
                
                </main>
            </Aux>
        )
    }
}

export default Layout