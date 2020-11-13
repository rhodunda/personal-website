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
