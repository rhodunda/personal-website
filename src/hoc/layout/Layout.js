import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import styles from './Layout.module.css'
import Toolbar from '../../componets/Toolbar/Toolbar'
import ProjectCards from '../../componets/ProjectCards/ProjectCards'
import Blogs from '../../componets/Blogs/Blogs'
import About from '../../componets/About/About'
import Contact from '../../componets/Contact/Contact'
import GitHub from '../../componets/Github/GitHub'
import Picture from '../../componets/Picture/Pictures'


class Layout extends Component {
    render () {
        return(
            <div className={styles.main}>
                <Toolbar/>
                <main >
                <ProjectCards/>
                <Blogs/>
                <div className={styles.format}>
                    <GitHub/>
                    <Contact/>
                    <Picture/>
                </div>
                <About/>
                </main>
            </div>
        )
    }
}

export default Layout