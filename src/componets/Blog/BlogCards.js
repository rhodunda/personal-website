import React from 'react'
import styles from './BlogCards.module.css'


const BlogCards = (props) => (

<div className={styles.Blog}>Blog's
    <div>name of Blog</div>
    <img src={props.img} alt="Avator" />
    <div className={styles.BlogDes}>description of blogs</div>
</div>

)


export default BlogCards