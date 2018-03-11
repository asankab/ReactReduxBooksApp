import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    componentDidMount(){
        const { requestBooks } = this.props;
        requestBooks();
    }

    renderDisplay(book){
        return (
            <div key={book.id} style={{padding:'10px', border: '1px solid #000000', margin: '15px'}}>
                <span>{book.userId}</span>
                <span>{book.title}</span>
                <span>{book.name}</span>
                <span>{book.message}</span>
            </div>
        )
    }

    render() {
        let { books, isFetching } = this.props;

        /*return (<div>
            {isFetching ? <span>Fetching in progress... </span> : <span>Books</span>}
        </div>)*/
        return isFetching ? <span>Fetching in progress... </span> : books.map((book => {
            //console.log(book)
            return this.renderDisplay(book)
        }))
    }
}

Book.propTypes = {
    isFetching: PropTypes.bool,
    posts: PropTypes.array,
    fetchingBooks: PropTypes.func
}

Book.defaultProps = {
}

export default Book