import { FETCH_POSTS_FETCHING, FETCH_POSTS_COMPLETED, FETCH_POSTS_ERROR } from '../actions'

export const INITIAL_STATE = {
    posts: []
}

export const postsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_POSTS_FETCHING:
            console.log('FETCH_POSTS_FETCHING REDUCER:', action)
            return [...state, action.state]
        case FETCH_POSTS_COMPLETED:
            console.log('FETCH_POSTS_COMPLETED REDUCER:', action)
            return [...state, action.state]
        case FETCH_POSTS_ERROR:
            console.log('FETCH_POSTS_ERROR REDUCER:', action)
        default:
            return state
    }
}