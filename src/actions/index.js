import { fetchBooks } from "../api/index";
import { FETCH_BOOKS_FETCHING, FETCH_BOOKS_COMPLETED, FETCH_BOOKS_ERROR } from '../actions'

export const requestBooks = (dispatch) => {

    dispatch(fetchingBooksStarted());

    return fetchBooks()
        .then(response  => {
        if(response.status === 200) {
            response.json().then(json => {
                dispatch(fetchingBooksCompleted(json))
            })
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            dispatch(fetchingBooksError())
            throw error;
        }
    }).catch(error => {
        dispatch(fetchingBooksError()),
            console.log('request failed', error); });

}

export const fetchingBooksStarted = () => {
    return { type: FETCH_BOOKS_FETCHING, payload: { isFetching : true }}
}

export const fetchingBooksCompleted = (books) => {
    return { type: FETCH_BOOKS_COMPLETED, payload: { isFetching: false, books: books }}
}

export const fetchingBooksError = () => {
    return { type: FETCH_BOOKS_ERROR, payload: { isFetching: false}}
}