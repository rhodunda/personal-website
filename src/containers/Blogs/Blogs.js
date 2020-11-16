import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../componets/Spinner/Spinner'
import styles from './Blogs.module.css'
import BlogCards from '../../componets/Blog/BlogCards'



class Blogs extends Component {

    componentDidMount() {
        this.props.onFetchBlogs()
    }

    render() {
        let blog = <Spinner/>
        if (!this.props.loading) {

        blog = this.props.blog.map( blog => (
                <BlogCards
                    key={blog.key}
                    title={blog.title}
                    description={blog.description}
                    img={blog.thumbnail}
                    url={blog.url}
                />
                ))
        }
   
        return(
            <div className={styles.Blog}>
                {blog}
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        blog: state.blog.blogs,
        loading: state.blog.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchBlogs: () => dispatch (actions.fetchBlogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)