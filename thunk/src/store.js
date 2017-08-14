import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import helloReducer from './reducers/helloReducer'

const initialState = {
  isFetching: false,
  greet: ''
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  helloReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)
