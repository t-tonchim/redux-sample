import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { logger } from 'redux-logger'

export default function configureStore(initialState){
  const sagaMiddleWare = createSagaMiddleWare()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleWare,
      logger
    )
  )

  sagaMiddleWare.run(rootSaga)

  return store
}
