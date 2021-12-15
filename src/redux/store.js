import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middlewares = [thunk]

// const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares),window.devToolsExtension && window.devToolsExtension())

const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer, initialState);

export default store;