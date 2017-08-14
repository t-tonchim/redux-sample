import { FETCH_HELLO_START, FETCH_HELLO_FAILURE, FETCH_HELLO_SUCCESS } from '../actions/helloAction'

export default function (state, action){
  switch(action.type){
  case FETCH_HELLO_START: {
    return {
      ...state,
      greet: '',
      isFetching: true,
      error: ''
    }
  }
  case FETCH_HELLO_SUCCESS: {
    return {
      ...state,
      greet: action.greet,
      isFetching: false,
      error: ''
    }
  }
  case FETCH_HELLO_FAILURE: {
    window.console.error(action.error)
    return {
      ...state,
      greet: '',
      isFetching: false,
      error: 'Error!!'
    }
  }
  default :
    return state
  }
}
