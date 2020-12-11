import React, { Component } from 'react'
import styles from './ProjectCards.module.css'
import Card from '../UI/ProjectCard/ProjectCard'

// trade trade city pictures
import TradeTradeCityPicture from '../../assets/images/Trade_Trade_city.png'
import TradeTradeCityPicture2 from '../../assets/images/Trade_Trade_2.png'
import TradeTradeCityPicture3 from '../../assets/images/Trade_Trade_3.png'
// burger builder pictures
import BurgerBuilderPicture from '../../assets/images/Burger_Builder.png'
import BurgerBuilderPicture2 from '../../assets/images/Burger_Builder2.png'
import BurgerBuilderPicture3 from '../../assets/images/Burger_Builder3.png'
// the mix pictures
import TheMixPicture from '../../assets/images/The_Mix.png'
import TheMixPicture2 from '../../assets/images/The_Mix2.png'
import TheMixPicture3 from '../../assets/images/The_Mix3.png'

// coming soon pictures
import ComingSoon from '../../assets/images/Coming_Soon.png'




class  ProjectCards extends Component {
    
    state = [
        {name: 'The Mix', img1: TheMixPicture, img2: TheMixPicture2, img3: TheMixPicture3, description: 'The Mix is the perfect place to find your next cocktail. Using an external api to source existing cocktails and the giving each user the ability to create their own cocktail, The Mix is the perfect spot to share and find cocktails.', link: 'https://cocktailfrontend.herokuapp.com/', heroku: true},
        {name: 'Burger Builder', img1: BurgerBuilderPicture, img2: BurgerBuilderPicture2, img3: BurgerBuilderPicture3, description: 'The Burger Builder is an online e-commerce platform template for local burger restaurants. A user can customize their burger, create and account, and view past orders.', link: 'https://burger-builder-83a64.web.app/', heroku: false},
        {name: 'Video Game Trader', img1: TradeTradeCityPicture, img2: TradeTradeCityPicture2, img3: TradeTradeCityPicture3, description: 'Trade City is a online trading app that allows users to trade video games from user to user. User can browse over 100 games seeded to the data base. You can add a game or platdform to your collection and offer them up for trade. Along with all that we have advanced stats about ever game, including genre, release date, rating, completion time, and more!', link: undefined, heroku: false},
        {name: 'Coming Soon!!!', img1: ComingSoon, img2: ComingSoon, img3: ComingSoon, description: 'SpaceX Dashboard, please check back for updates.', link: undefined, heroku: false}
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
            // img={project.img}
            picture_one={project.img1}
            picture_two={project.img2}
            picture_three={project.img3}
            descripton={project.description}
            changed={project.link}
            disabledCheck={checkAvailablilty(project)}
            heroku={project.heroku}
            />
        ))}
            
    </div>

        )
    }
    
        }


export default ProjectCards