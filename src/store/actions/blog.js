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
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rhodunda')
        .then (res => {
            console.log(res)
            const fetchedBlogs = []
            for (let key in res.data.items) {
                fetchedBlogs.push( {
                    ...res.data.items[key],
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