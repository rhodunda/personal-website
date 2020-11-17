import React, { Component } from 'react'
// import Aux from '../Aux/Aux'
import styles from './Layout.module.css'
import Toolbar from '../../componets/Toolbar/Toolbar'
import ProjectCards from '../../componets/ProjectCards/ProjectCards'
import Blogs from '../../containers/Blogs/Blogs'
import About from '../../componets/About/About'
import Contact from '../../componets/Contact/Contact'
import GitHub from '../../componets/Github/GitHub'
import Picture from '../../componets/Picture/Pictures'


class Layout extends Component {

    state = {
        isScroll: false
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener('scroll', function(e) {
            scrollComponent.toggleVisibility()
        })
    }

    topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    toggleVisibility() {
     
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             this.setState({isScroll: true})
        }    
        
    }
    
    render() {

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
                <button onClick={() => this.topFunction()} className={styles.scrollToTop ? this.state.isScroll : !styles.scrollToTopShow}>Top</button>
                </main>
            </div>
        )
    }

}




export default Layout