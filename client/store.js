import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

/* IMPORT REDUCERS */
import calories from './reducers/caloriesReducer'
import selected from './reducers/selectedReducer'
import auth from './reducers/authReducer'
import dropdown from './reducers/dropdownReducer'

export default createStore(
  combineReducers({
    calories,
    selected,
    auth,
    dropdown
  }),
  {},
  applyMiddleware(createLogger())
)