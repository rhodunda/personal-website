import React, { Component } from 'react'
import styles from './ScrollToTop.module.css'


class Scroll extends Component {

    state = {
        isScroll: false
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility();
    });
    }

    toggleVisibility() {
        
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    render() {
        return(
            <button className={styles.ScrollButton}>TOP</button>
        )
    }
}

export default Scroll