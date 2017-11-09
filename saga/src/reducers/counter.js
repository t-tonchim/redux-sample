import actions from '../actions'
import { handleActions } from 'redux-actions'

export const initialState = {
  count: 0
}

export default handleActions(
  {
    [actions.incriment]: state => ({
      ...state,
      count: state.count + 1
    }),
    [actions.decriment]: state => ({
      ...state,
      count: state.count - 1
    })
  },
  initialState
)
