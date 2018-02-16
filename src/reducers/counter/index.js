import createReducer from 'redux-createreducer'
import { countRequested, decreaseCount, increaseCount } from './handlers'
import * as types from '../../constants/actionTypes'

const initialState = {
  count: 0,
  isCounting: false,
  result: null
}

const handlers = {
  [types.COUNT_INCREASE_SUCCESS]: increaseCount,
  [types.COUNT_DECREASE_SUCCESS]: decreaseCount,
  [types.COUNT_REQUEST]: countRequested
}

export default createReducer(initialState, handlers)
