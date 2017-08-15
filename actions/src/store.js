import { createStore } from 'redux'
import reducer, { initialState } from './reducers/fizzBuzzReducer'

export default createStore(
  reducer,
  initialState
)
