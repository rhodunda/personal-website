import React from 'react'
import Card from '../UI/ProjectCard/ProjectCard'




const projects = [
    {name: 'The Mix', img: 'file path', description: 'bah bah bah bah'},
    {name: 'Burger Builder', img: 'file path', description: 'bah bah bah bah'},
    {name: 'Video Game Trader', img: 'file path', description: 'bah bah bah bah'}
]

const ProjectCards = () => (

    <div>
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