import React from 'react'
import styles from './GitHub.module.css'
import githubPicture from '../../assets/images/github.png'
import Button from '../UI/Button/Button'
// import Aux from '../../hoc/Aux/Aux'


const Github = () => (
    <div className={styles.GitHubMain}>
    <img src={githubPicture} alt='avator' className={styles.githubPicture}/>
    <Button
    link="https://github.com/rhodunda">Link to Github</Button>
    </div>
    
)


export default Github