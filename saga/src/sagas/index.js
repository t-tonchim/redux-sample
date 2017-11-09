import { takeEvery, delay } from 'redux-saga'
import { put, call, fork } from 'redux-saga/effects'
import actions from '../actions'

export function* incrimentAsync() {
  yield call(delay, 1000)
  yield put(actions.incriment())
}

export function* decrimentAsync() {
  yield call(delay, 1000)
  yield put(actions.decriment())
}

export function* incrimentDouble() {
  const action = take(actions.double)
}
export default function* rootSaga() {
  yield takeEvery(actions.decrimentAsync, decrimentAsync)
  yield takeEvery(actions.incrimentAsync, incrimentAsync)
}
