import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

/* IMPORT REDUCERS */
import calories from './reducers/caloriesReducer'

export default createStore(
  combineReducers({
    calories
  }),
  {},
  applyMiddleware(createLogger())
)