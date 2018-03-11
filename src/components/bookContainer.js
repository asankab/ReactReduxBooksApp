import { connect } from 'react-redux'
import Book from './Book'
import { requestBooks } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.book.books,
        isFetching: state.book.isFetching
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestBooks: () => { dispatch(requestBooks) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)