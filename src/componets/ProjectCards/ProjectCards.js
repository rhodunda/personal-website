import React, { Component } from 'react'
import styles from './ProjectCards.module.css'
import Card from '../UI/ProjectCard/ProjectCard'
import BurgerBuilderPicture from '../../assets/images/Burger_Builder.png'
import TheMixPicture from '../../assets/images/The_Mix.png'
import TradeTradeCityPicture from '../../assets/images/Trade_Trade_city.png'
import ComingSoon from '../../assets/images/Coming_Soon.png'




class  ProjectCards extends Component {
    
    state = [
        {name: 'The Mix', img: TheMixPicture , description: 'The Mix is an online cocktail sharing website that allows users to create, favorite, rate, and review cocktails. After a user creates an account and login they can browse through hundreds of cocktails added to the database.', link: 'https://cocktailfrontend.herokuapp.com/'},
        {name: 'Burger Builder', img: BurgerBuilderPicture, description: 'The Burger Builder is an online e-commerce platform template for local burger restaurants. A user can customize their burger, create and account, and view past orders.', link: 'https://burger-builder-83a64.web.app/'},
        {name: 'Video Game Trader', img: TradeTradeCityPicture, description: 'Trade City is a online trading app that allows users to trade video games from user to user. User can browse over 100 games seeded to the data base. You can add a game or platdform to your collection and offer them up for trade. Along with all that we have advanced stats about ever game, including genre, release date, rating, completion time, and more!', link: undefined},
        {name: 'Coming Soon!!!', img: ComingSoon, description: 'SpaceX Dashboard, please check back for updates.', link: undefined}
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