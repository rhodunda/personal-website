import React from 'react'
import styles from './BlogCards.module.css'


const BlogCards = (props) => (

<div className={styles.Blog}>
    <bold className={styles.idTab}>Blogs</bold>
    <div className={styles.BlogDes}>name of Blog</div>
    <img src={props.img} alt="Avator" />
    <div className={styles.BlogDes}>description of blogs</div>
</div>

)


export default BlogCards