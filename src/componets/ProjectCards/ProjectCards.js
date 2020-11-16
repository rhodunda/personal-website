import React, { Component } from 'react'
import styles from './ProjectCards.module.css'
import Card from '../UI/ProjectCard/ProjectCard'
import BurgerBuilderPicture from '../../assets/images/Burger_Builder.png'
import TheMixPicture from '../../assets/images/The_Mix.png'
import TradeTradeCityPicture from '../../assets/images/Trade_Trade_city.png'
import ComingSoon from '../../assets/images/Coming_Soon.png'




class  ProjectCards extends Component {
    
    state = [
        {name: 'The Mix', img: TheMixPicture , description: 'bah bah bah bah', link: 'https://cocktailfrontend.herokuapp.com/'},
        {name: 'Burger Builder', img: BurgerBuilderPicture, description: 'bah bah bah bah', link: 'https://burger-builder-83a64.web.app/'},
        {name: 'Video Game Trader', img: TradeTradeCityPicture, description: 'bah bah bah bah', link: undefined},
        {name: 'Coming Soon', img: ComingSoon, description: 'bah bah bah bah', link: undefined}
    ]

    render () {

        const checkAvailablilty = (project) => {
            if(project.link) {
                return true
            }else{
                return false
            }
        }


        return (
    <div className={styles.projects}>
        {this.state.map(project => (
            <Card
            key={project.name}
            name={project.name}
            img={project.img}
            descripton={project.description}
            changed={project.link}
            disabledCheck={checkAvailablilty(project)}
            />
        ))}
            
    </div>

        )
    }
    
        }


export default ProjectCards