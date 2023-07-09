import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import logger from 'redux-logger'

const store = createStore(RootReducer, applyMiddleware(logger))
// const store = createStore(RootReducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store