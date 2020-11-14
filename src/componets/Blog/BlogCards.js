import React from 'react'
import styles from './BlogCards.module.css'


const BlogCards = (props) => {


return (
<div className={styles.Blog}>
    <div className={styles.idTab}>Blogs</div>
    <div className={styles.BlogDes}>{props.title}</div>
    <img src={props.img} alt="Avator" />
    <div className={styles.BlogDes}>{props.description}</div>
</div>
)
}


export default BlogCards