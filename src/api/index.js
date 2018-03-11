
export const fetchBooks = (dispatch) => {
    //console.log('In Api')
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    return fetch(URL).then(response => response);
}
