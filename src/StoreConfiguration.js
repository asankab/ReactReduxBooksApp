import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const StoreConfig = createStore(
    rootReducer,
    //applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(thunk))
)

export default StoreConfig