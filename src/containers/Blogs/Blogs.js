import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../componets/Spinner/Spinner'


class Blogs extends Component {

    componentDidMount() {
        this.props.onFetchBlogs()
    }

    render() {
        let blog = <Spinner/>
        if (!this.props.loading) {
            blog = <div>working</div>
        }

        return(
            <div>
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

export default connect (mapStateToProps, mapDispatchToProps)(Blogs)