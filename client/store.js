import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

/* IMPORT REDUCERS */
import calories from './reducers/caloriesReducer'
import selected from './reducers/selectedReducer'
import auth from './reducers/authReducer'

export default createStore(
  combineReducers({
    calories,
    selected,
    auth,
  }),
  {},
  applyMiddleware(createLogger())
)