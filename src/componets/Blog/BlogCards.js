import React from 'react'
import styles from './BlogCards.module.css'


const BlogCards = (props) => {


return (
<div className={styles.Blog}>
    <div className={styles.idTab}>Blogs</div>
    <div className={styles.BlogDes}>{props.title}</div>
    <img src={props.img} alt="Avator" className={styles.ImgBlog} />
    <div className={styles.BlogDes}>Link to Blog</div>
</div>
)
}


export default BlogCards