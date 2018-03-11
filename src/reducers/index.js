import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer'
import { booksReducer } from './booksReducer'

const rootReducer = combineReducers({ post: postsReducer, book: booksReducer })
export default rootReducer
