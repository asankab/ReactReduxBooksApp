import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import StoreConfig from './StoreConfiguration'
import { Provider } from 'react-redux'
import bookContainer from "./components/bookContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker'

const store = StoreConfig

window.React = React
window.store = store

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={bookContainer} />
        </Router>
    </Provider>, document.getElementById('root'))

registerServiceWorker()
