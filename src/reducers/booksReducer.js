import { FETCH_BOOKS_FETCHING, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERROR } from '../actions'

export const initialState = {
    isFetching: false,
    books: []
}

export const booksReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_BOOKS_FETCHING:
        case FETCH_BOOKS_COMPLETED:
            return {...state, ...action.payload}
        case FETCH_BOOKS_ERROR:
            return [...state, action.payload]
        default:
            return state
    }
}