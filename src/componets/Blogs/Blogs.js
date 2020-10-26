import React from 'react'
import styles from './Blogs.module.css'
import BlogCards from '../Blog/BlogCards'


const Blogs = (props) => (
<div className={styles.Blog}>
<BlogCards/>
<BlogCards/>
<BlogCards/>
</div>
)


export default Blogs