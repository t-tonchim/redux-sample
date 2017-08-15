import actions from '../actions/fizzBuzzAction'
import { handleActions } from 'redux-actions'

export const initialState = {
  result: ''
}

export default handleActions({
  [actions.fizzBuzzJudgement]: {
    // redux-actionsの規約で通常はnextが呼ばれるが、
    // Errorオブジェクトが渡されるとthrowが呼ばれる
    next: (state, action) => ({
      ...state,
      result: action.payload.result
    }),
    throw: state => ({
      ...state,
      result: 'Error!'
    })
  }
}, initialState)
