import * as actionTypes from './actionTypes'
import axios from 'axios'



export const fetchBlogsSuccess = ( blogs ) => {
    return {
        type: actionTypes.FETCH_BLOGS_SUCCESS,
        blogs: blogs
    }
}

export const fetchBlogsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_BLOGS_FAIL,
        error: error
    }
}

export const fetchBlogsStart = (  ) => {
    return {
        type: actionTypes.FETCH_BLOGS_START
    }
}

export const fetchBlogs = () => {
    return dispatch => {
        dispatch(fetchBlogsStart())
        axios.get('add URL')
        .then (res => {
            const fetchedBlogs = []
            for (let key in res.data) {
                fetchedBlogs.push( {
                    ...res.data[key],
                    id: key
                })
            }
            dispatch(fetchBlogsSuccess(fetchedBlogs))
        })
        .catch( err => {
            dispatch(fetchBlogsFail(err))
        })
    }
}