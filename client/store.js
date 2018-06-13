import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

/* IMPORT REDUCERS */
import calories from './reducers/caloriesReducer'
import selected from './reducers/selectedReducer'

export default createStore(
  combineReducers({
    calories,
    selected
  }),
  {},
  applyMiddleware(createLogger())
)