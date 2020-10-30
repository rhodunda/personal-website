import React from 'react'
import styles from './ProjectCards.module.css'
import Card from '../UI/ProjectCard/ProjectCard'
import BurgerBuilderPicture from '../../assets/images/Burger_Builder.png'
import TheMixPicture from '../../assets/images/The_Mix.png'
import TradeTradeCityPicture from '../../assets/images/Trade_Trade_city.png'
import ComingSoon from '../../assets/images/Coming_Soon.png'



const projects = [
    {name: 'The Mix', img: TheMixPicture , description: 'bah bah bah bah'},
    {name: 'Burger Builder', img: BurgerBuilderPicture, description: 'bah bah bah bah'},
    {name: 'Video Game Trader', img: TradeTradeCityPicture, description: 'bah bah bah bah'},
    {name: 'Coming Soon', img: ComingSoon, description: 'bah bah bah bah'}
]

const ProjectCards = () => (

    <div className={styles.projects}>
        {projects.map(pro => (
            <Card
            key={pro.name}
            name={pro.name}
            img={pro.img}
            descripton={pro.description}
            />
        ))}
            
    </div>
    
    
)


export default ProjectCards