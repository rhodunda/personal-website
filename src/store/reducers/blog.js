import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'


const initialState = {
    blogs:[],
    loading: false
}

const fetchBlogStart = (state, action) => {
    return updateObject( state, { loading: true })
}


const fetchBlogSuccess = (state, action) => {
    return updateObject( state, {
        blogs: action.blogs,
        loading: false
    })
}

const fetchBlogFail = (state, action) => {
    return updateObject( state, { loading: false})
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.FETCH_BLOGS_START: return fetchBlogStart(state, action);
        case actionTypes.FETCH_BLOGS_SUCCESS: return fetchBlogSuccess(state, action);
        case actionTypes.FETCH_BLOGS_FAIL: return fetchBlogFail(state, action)
    }
}

export default reducer