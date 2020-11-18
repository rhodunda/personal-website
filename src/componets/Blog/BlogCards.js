import React from 'react'
import styles from './BlogCards.module.css'
import Button from '../UI/Button/Button'

const BlogCards = (props) => {


return (
<div className={styles.Blog}>
    <h2 className={styles.idTab}>Blog</h2>
    <div className={styles.BlogDes}>{props.title}</div>
    <img src={props.img} alt="Avator" className={styles.ImgBlog} />
    <Button
    link={props.url}>Link to Blog</Button>
</div>
)
}


export default BlogCards